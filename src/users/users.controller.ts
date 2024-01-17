import {
  Controller,
  Post,
  Get,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';

@Controller('auth')
@serialize(UserDto)
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.userService.create(body.email, body.password);
  }
  // @UseInterceptors(new SerializeInterceptor(UserDto))

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }

  @Get()
  findUsers(@Param('email') email: string) {
    return this.userService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.delete(Number(id));
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() Body: UpdateUserDto) {
    return this.userService.update(Number(id), Body);
  }
}
