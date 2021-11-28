import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { EntityExistsError } from '../errors';
import { PreUserDto, UserDto } from '../dto';
import IDENTIFIERS from '../repositories/identifiers';
import { UsersRepository } from '../repositories/interfaces';
import { UsersService } from './interfaces';

@injectable()
export class UsersServiceImpl implements UsersService {
  constructor(
    @inject(IDENTIFIERS.USERS_REPOSITORY) private readonly usersRepository: UsersRepository
  ) {}

  async createUser(user: PreUserDto): Promise<UserDto> {
    const foundUser = await this.findUserByLogin(user.login);
    if (foundUser) {
      throw new EntityExistsError('User', 'login', user.login);
    }

    return await this.usersRepository.createUser(user);
  }

  private async findUserByLogin(login: string): Promise<UserDto | null> {
    return await this.usersRepository.findUserByLogin(login);
  }
}
