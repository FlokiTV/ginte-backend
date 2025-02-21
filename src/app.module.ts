import { Module } from '@nestjs/common';
import { ClientsModule } from './api/clients/clients.module';
import { DrizzleModule } from './drizzle/drizzle.module';

@Module({
  imports: [DrizzleModule, ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
