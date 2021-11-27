import { Router } from 'express';
import ioc from '../ioc';
import IDENTIFIERS from '../controllers/identifiers';
import { UsersController } from 'src/controllers/interfaces';

const router = Router();

export const BASE_ROUTE = '/users';

export const routes = () => {
  const usersController = ioc.get<UsersController>(IDENTIFIERS.USERS_CONTROLLER);

  router.post('/', usersController.createUser.bind(usersController));

  return router;
};
