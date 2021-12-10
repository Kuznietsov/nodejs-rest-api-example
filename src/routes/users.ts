import { Router } from 'express';
import ioc from '../ioc';
import IDENTIFIERS from '../controllers/identifiers';
import { UsersController } from '../controllers/interfaces';
import { validate } from '../middlewares';
import { userValidator } from '../validators';

const router = Router();

export const BASE_ROUTE = '/users';

export const routes = () => {
  const usersController = ioc.get<UsersController>(IDENTIFIERS.USERS_CONTROLLER);

  router.post('/', [validate(userValidator)], usersController.createUser.bind(usersController));
  router.get('/', [], usersController.getUsers.bind(usersController));

  return router;
};
