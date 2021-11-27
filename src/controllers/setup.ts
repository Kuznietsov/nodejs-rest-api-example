import ioc from '../ioc';
import IDENTIFIERS from './identifiers';
import { UsersController } from './interfaces/users';
import { UsersControllerImpl } from './users';

export const setupIoC = () => {
  ioc.bind<UsersController>(IDENTIFIERS.USERS_CONTROLLER).to(UsersControllerImpl);
};
