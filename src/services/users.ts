import { injectable } from 'inversify';
import 'reflect-metadata';

import { PreUserDto, UserDto } from 'src/dto';
import { UsersService } from './interfaces';

@injectable()
export class UsersServiceImpl implements UsersService {
  createUser(user: PreUserDto): UserDto {
    return { ...user, id: '1' };
  }
}
