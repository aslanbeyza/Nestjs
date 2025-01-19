import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-users.dto';
import { UserService } from './user.service';

// localhost + port +/ tetiklicen users yazınca buraya gelcek
@Controller('users')
export class UsersController {
  constructor(private x:UserService){

  }
  @Get()
  getAll() {
    return this.x.findAll();
  }
  @Get(':id')
  /* id yi id ye atadık isteersen x de  */
  getOne(@Param('id') id) {
    return `This id ${id}`;
  }
  /*dto data transfer object body de bişey yollaması lazım ya*/
  @Post()
  create(@Body() allProbs: CreatePersonDto) {
    return `User created Username is : ${allProbs.username}`;
  }
}
