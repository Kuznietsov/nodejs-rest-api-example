import ioc from '../ioc';
import IDENTIFIERS from './identifiers';
import { UsersRepository } from './interfaces/users';
import { UsersRepositoryImpl } from './users';

export const setupIoC = () => {
  ioc.bind<UsersRepository>(IDENTIFIERS.USERS_REPOSITORY).to(UsersRepositoryImpl);
};
