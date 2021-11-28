import { Express, json } from 'express';
import cors from 'cors';
import helmet from 'helmet';

export function setupMiddlewares(app: Express) {
  app.use(json());
  app.use(helmet());
  app.use(cors());
}
