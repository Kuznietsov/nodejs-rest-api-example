import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { PreUserDto, UserDto } from '../dto';
import IDENTIFIERS from '../repositories/identifiers';
import { UsersRepository } from '../repositories/interfaces';
import { UsersService } from './interfaces';

@injectable()
export class UsersServiceImpl implements UsersService {
  constructor(
    @inject(IDENTIFIERS.USERS_REPOSITORY) private readonly usersRepository: UsersRepository
  ) {}

  createUser(user: PreUserDto): UserDto {
    return this.usersRepository.createUser(user);
  }
}
