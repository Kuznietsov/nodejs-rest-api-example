import ioc from '../ioc';
import IDENTIFIERS from './identifiers';
import { UsersService } from './interfaces/users';
import { UsersServiceImpl } from './users';

export const setupIoC = () => {
  ioc.bind<UsersService>(IDENTIFIERS.USERS_SERVICE).to(UsersServiceImpl);
};
