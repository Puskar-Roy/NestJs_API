import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/allUsers')
  allUsers() {
    return this.userService.getAllUsers();
  }
  @Get('/:id')
  getUser(@Param('id', ParseIntPipe) userId: number) {
    return this.userService.getUserById(userId);
  }
  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) userId: number) {
    return this.userService.getUserById(userId);
  }
}
