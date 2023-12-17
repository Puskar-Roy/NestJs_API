import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/userCreate.dto';
import { LoginUserDto } from './dto/userLogin.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}
  register(UserDto: CreateUserDto) {
    return { body: UserDto };
  }
  login(UserDto: LoginUserDto) {
    return { body: UserDto };
  }
}
