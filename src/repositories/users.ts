import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { PreUserDto, UserDto } from '../dto';
import IDENTIFIERS from '../models/identifiers';
import { UserMapper, UserModel } from '../models/pg';
import { UsersRepository } from './interfaces';

@injectable()
export class UsersRepositoryImpl implements UsersRepository {
  constructor(
    @inject(IDENTIFIERS.USER_MODEL) private readonly userModel: typeof UserModel,
    @inject(IDENTIFIERS.USER_MAPPER) private readonly userMapper: UserMapper
  ) {}

  async findUserByLogin(login: string): Promise<UserDto | null> {
    const user = await this.userModel.findOne({ where: { login } });
    return user ? this.userMapper.toDomain(user) : null;
  }

  async createUser(user: PreUserDto): Promise<UserDto> {
    return await this.userModel.create(this.userMapper.toDalEntity(user));
  }
}
