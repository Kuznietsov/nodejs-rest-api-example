import { NextFunction, Request, Response } from 'express';
import { createLogger } from '../logger';

const logger = createLogger('REST');

export const logRequests = (req: Request, res: Response, next: NextFunction) => {
  const methodsWithBody = ['POST', 'PUT', 'PATCH'];
  logger.info(`API called`, {
    url: req.path,
    method: req.method,
    arguments: methodsWithBody.includes(req.method) ? req.body : req.query,
  });

  next();
};
