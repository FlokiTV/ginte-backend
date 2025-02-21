import { Module } from '@nestjs/common';
import { UsersModule } from './api/users/users.module';
import { ClientsModule } from './api/clients/clients.module';

@Module({
  imports: [UsersModule, ClientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
