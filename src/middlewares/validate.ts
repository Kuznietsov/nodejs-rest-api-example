import { NextFunction, Request, Response } from 'express';
import { ObjectSchema, ValidationError } from 'joi';
import status from 'http-status';
import { ErrorResponse } from 'src/errors';

export const validate =
  (validator: ObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedObj = await validator.validateAsync(req.body);
      req.body = validatedObj;
      next();
    } catch (error) {
      if (error instanceof ValidationError) {
        const err: ErrorResponse = {
          name: error.name,
          message: JSON.stringify(error.details.map(({ message }) => message)),
          statusCode: status.BAD_REQUEST,
        };
        res.status(err.statusCode).send(err);
        return;
      }

      next(error);
    }
  };
