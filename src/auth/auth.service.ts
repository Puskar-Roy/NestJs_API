import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/userCreate.dto';
import { LoginUserDto } from './dto/userLogin.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}
  async register(UserDto: CreateUserDto) {
    const user = await this.userRepo.findOne({
      where: { email: UserDto.email },
    });
    if (user) {
      throw new ConflictException(
        `User With This ${UserDto.email} Already exists!`,
      );
    }
    const hashedPassword = await bcrypt.hash(UserDto.password, 10);
    const hashedCPassword = await bcrypt.hash(UserDto.cpassword, 10);
    const userToSave = this.userRepo.create({
      ...UserDto,
      password: hashedPassword,
      cpassword: hashedCPassword,
    });
    return this.userRepo.save(userToSave);
  }
  async login(UserDto: LoginUserDto) {
    const user = await this.userRepo.findOne({
      where: { email: UserDto.email },
    });
    if (!user) {
      throw new NotFoundException(`User With This ${UserDto.email} not found!`);
    }
    const isPasswordValid = await bcrypt.compare(
      UserDto.password,
      user.password,
    );
    if (isPasswordValid) {
      user.password = undefined;
      user.cpassword = undefined;
      return { data: user };
    } else {
      throw new Error('Invalid Credentials');
    }
  }
  async getAllUsers(): Promise<User[]> {
    const allusers = await this.userRepo.find();
    return allusers;
  }
  async getUserById(userId: number): Promise<User> {
    const user = await this.userRepo.findOne({ where: { id: userId } });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user;
  }
}
