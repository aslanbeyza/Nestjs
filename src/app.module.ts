import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule,MongooseModule.forRoot("mongodb+srv://beyza:beyza@clusterbeyza.h3v6s.mongodb.net/Test?retryWrites=true&w=majority&appName=ClusterBeyza")],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}