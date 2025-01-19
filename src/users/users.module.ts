import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  /* controller içindede importu unutma */
  controllers: [UsersController],
  /* oluşturduğum services dosyalarını buna koyuyoruz*/
  providers: [UserService]
})
export class UsersModule {}
