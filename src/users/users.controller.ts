import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-users.dto';
import { UserService } from './user.service';
import { User } from './schemas/users.schema';

// localhost + port +/ tetiklicen users yazınca buraya gelcek
@Controller('users')
export class UsersController {
  constructor(private userService:UserService){

  }
  @Get()
  getAll():Promise<User[]>  {
    return this.userService.getAll();
  }
  @Get(':id')
  /* id yi id ye atadık isteersen x de  */
  getOne(@Param('id') id) :Promise<User> {
    return this.userService.getOne(id);
  }
  /*dto data transfer object body de bişey yollaması lazım ya*/
  @Post()
  create(@Body() allProbs: CreatePersonDto) {
    return `User created Username is : ${allProbs.username}`;
  }
  @Put(":id")
  update(@Param("id")id,@Body() allProps : CreatePersonDto){
    return this.userService.update(id,allProps);
  }
  @Delete(":id")
  remove(@Param("id") id){ /* id aldın id ye koydun */
    console.log("id si", this.remove(id)+"olan silindi")
    return this.userService.remove(id);
  }
}
