import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/userCreate.dto';
import { LoginUserDto } from './dto/userLogin.dto';

@Controller('api/auth')
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
}
