import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ErrorResponse } from '../errors';

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
  res.status(error.statusCode).json(error);
  next(error);
}
