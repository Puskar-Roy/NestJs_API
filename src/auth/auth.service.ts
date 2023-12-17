import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/userCreate.dto';
import { LoginUserDto } from './dto/userLogin.dto';

@Injectable()
export class AuthService {
  register(UserDto: CreateUserDto) {
    return { body: UserDto };
  }
  login(UserDto: LoginUserDto) {
    return { body: UserDto };
  }
}
