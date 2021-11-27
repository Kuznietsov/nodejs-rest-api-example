import { injectable } from 'inversify';
import 'reflect-metadata';

import { PreUserDto, UserDto } from 'src/dto';
import { UsersRepository } from './interfaces';

@injectable()
export class UsersRepositoryImpl implements UsersRepository {
  createUser(user: PreUserDto): UserDto {
    return { ...user, id: '121' };
  }
}
