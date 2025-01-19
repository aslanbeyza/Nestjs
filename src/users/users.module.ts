import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/users.schema';

@Module({
                                     /* burdaki name nerden geliyo anlamadım */
  imports: [MongooseModule.forFeature([{name: User.name, schema:UserSchema}])],
  /* controller içindede importu unutma */
  controllers: [UsersController],
  /* oluşturduğum services dosyalarını buna koyuyoruz*/
  providers: [UserService]
})
export class UsersModule {}
