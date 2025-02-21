import { Module } from '@nestjs/common';
import { UsersModule } from './api/users/users.module';
import { ClientsModule } from './api/clients/clients.module';
import { AuthModule } from './api/auth/auth.module';
import { DrizzleModule } from './drizzle/drizzle.module';

@Module({
  imports: [DrizzleModule, UsersModule, ClientsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
