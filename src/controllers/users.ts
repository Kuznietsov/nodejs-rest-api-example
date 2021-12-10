import httpStatus from 'http-status';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { EntityExistsError } from '../errors';

import { PreUserDto, UserDto } from '../dto';
import identifiers from '../services/identifiers';
import { UsersService } from '../services/interfaces';
import { Response, Request, UsersController } from './interfaces';
import { ErrorResponse } from 'src/errors/error_response';
import { NextFunction } from 'express';

@injectable()
export class UsersControllerImpl implements UsersController {
  constructor(@inject(identifiers.USERS_SERVICE) private readonly usersService: UsersService) {}

  async createUser(
    req: Request<PreUserDto, UserDto | ErrorResponse>,
    res: Response<UserDto | ErrorResponse>,
    next: NextFunction
  ) {
    try {
      const user = await this.usersService.createUser(req.body);
      return res.status(httpStatus.CREATED).send(user);
    } catch (error) {
      if (error instanceof EntityExistsError) {
        res
          .status(httpStatus.CONFLICT)
          .send({ message: error.message, name: error.name, statusCode: httpStatus.CONFLICT });
        return;
      }
      next(error);
    }
  }

  async getUsers(req: Request<null, UserDto[]>, res: Response<UserDto[]>, next: NextFunction) {
    try {
      const users = await this.usersService.getUsers();
      return res.status(httpStatus.OK).send(users);
    } catch (error) {
      next(error);
    }
  }
}
