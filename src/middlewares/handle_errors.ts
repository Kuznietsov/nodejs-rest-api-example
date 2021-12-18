import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { createLogger } from '../logger';
import { ErrorResponse } from '../errors';

const logger = createLogger('[UNHANDLED ERROR]');

export function handlerErrors(
  err: Error | ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = (err as ErrorResponse).statusCode ?? httpStatus.INTERNAL_SERVER_ERROR;
  const error: ErrorResponse = {
    statusCode,
    message:
      err.message ??
      (statusCode === httpStatus.INTERNAL_SERVER_ERROR ? httpStatus['500_MESSAGE'] : ''),
    name: err.name,
  };

  logger.error(error);

  res.status(error.statusCode).json(error);
  next(error);
}
