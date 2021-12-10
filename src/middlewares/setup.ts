import { Express, json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { handlerErrors } from './handle_errors';
import { logRequests } from './log_requests';

export function setupMiddlewares(app: Express) {
  app.use(json());
  app.use(helmet());
  app.use(cors());
  app.use(logRequests);
}

export function setupErrorMiddlewares(app: Express) {
  app.use(handlerErrors);
}
