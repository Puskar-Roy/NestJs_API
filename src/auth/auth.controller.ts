import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  register(@Req() req: Request) {
    return this.authService.greetingS(req);
  }
  @Post('/login')
  login(@Body() body: any) {
    return this.authService.login(body);
  }
}
