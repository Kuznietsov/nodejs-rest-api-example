import { NextFunction, Request, Response } from 'express';
import { ObjectSchema, ValidationError } from 'joi';
import status from 'http-status';

export const validate =
  (validator: ObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedObj = await validator.validateAsync(req.body);
      req.body = validatedObj;
      next();
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(status.BAD_REQUEST).send(error.details);
        return;
      }

      next(error);
    }
  };
