import ioc from '../ioc';
import IDENTIFIERS from './identifiers';
import { UsersController } from './interfaces/users';
import { UsersControllerImplementation } from './users';

export const setupIoC = () => {
  ioc.bind<UsersController>(IDENTIFIERS.USERS_CONTROLLER).to(UsersControllerImplementation);
};
