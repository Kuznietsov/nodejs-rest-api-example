import { Express } from 'express';
import { BASE_ROUTE as USERS, routes as usersRoutes } from './users';

export const setupRoutes = (app: Express) => {
  app.use(USERS, usersRoutes());
};
