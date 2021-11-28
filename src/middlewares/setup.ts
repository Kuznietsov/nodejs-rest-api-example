import { Express, json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { handlerErrors } from './handle_errors';

export function setupMiddlewares(app: Express) {
  app.use(json());
  app.use(helmet());
  app.use(cors());
}

export function setupErrorMiddlewares(app: Express) {
  app.use(handlerErrors);
}
