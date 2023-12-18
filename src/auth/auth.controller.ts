import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/userCreate.dto';
import { LoginUserDto } from './dto/userLogin.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  register(@Body() UserDto: CreateUserDto) {
    return this.authService.register(UserDto);
  }
  @Post('/login')
  login(@Body() UserDto: LoginUserDto) {
    return this.authService.login(UserDto);
  }
  @Get('/users')
  allUsers() {
    return this.authService.getAllUsers();
  }
  @Get('/user/:id')
  getUser(@Param('id', ParseIntPipe) userId: number) {
    return this.authService.getUserById(userId);
  }
}
