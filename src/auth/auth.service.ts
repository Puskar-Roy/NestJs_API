import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthService {
  greetingS(req: Request) {
    return req.body;
  }
  login(body: any) {
    return body;
  }
}
