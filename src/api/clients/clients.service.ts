import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { DRIZZLE } from 'src/drizzle/drizzle.module';
import { DrizzleDB } from 'src/drizzle/types/drizzle';
import { clients } from 'src/drizzle/schema/schema';
import { eq, ilike, inArray, like, or, SQLWrapper } from 'drizzle-orm';

@Injectable()
export class ClientsService {
  constructor(@Inject(DRIZZLE) private db: DrizzleDB) {}

  async create(createClientDto: CreateClientDto) {
    const data = await this.db
      .insert(clients)
      .values(createClientDto)
      .returning();
    return data[0];
  }

  async findAll(query = '', page = 1) {
    function SQL(db: DrizzleDB) {
      return db
        .select()
        .from(clients)
        .where(
          query != ''
            ? or(
                like(clients.name, `%${query}%`),
                like(clients.email, `%${query}%`),
              )
            : undefined,
        );
    }

    const data = await SQL(this.db)
      .limit(10)
      .offset((page - 1) * 10);

    const total = await this.db.$count(SQL(this.db));

    return { data, total };
  }

  async findOne(id: number) {
    const data = await this.db.select().from(clients).where(eq(clients.id, id));
    if (data[0]) {
      return data[0];
    } else {
      throw new ForbiddenException('Client not found');
    }
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const data = await this.db
      .update(clients)
      .set(updateClientDto)
      .where(eq(clients.id, id))
      .returning();
    if (data[0]) {
      return data[0];
    } else {
      throw new ForbiddenException('Client not found');
    }
  }

  async remove(ids: string[]) {
    const data = await this.db.delete(clients).where(
      inArray(
        clients.id,
        ids.map((e) => +e),
      ),
    );
    if (data.changes > 0) {
      return { success: true };
    } else {
      return { success: false };
    }
  }
}
