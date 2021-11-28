import { RequestHandler } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { PreUserDto, UserDto } from 'src/dto';
import { ErrorResponse } from '../../errors';

export interface UsersController {
  createUser: RequestHandler<ParamsDictionary, UserDto | ErrorResponse, PreUserDto>;
}
