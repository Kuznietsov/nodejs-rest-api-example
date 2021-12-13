import { Request } from 'express';
import { Logger } from 'winston';

export const logErrors = (
  logger: Logger,
  method: string,
  { body, query, params, headers }: Request,
  error: unknown
) =>
  logger.error({
    method,
    arguments: { params, query, body, headers },
    error: (error as Error).message,
  });
