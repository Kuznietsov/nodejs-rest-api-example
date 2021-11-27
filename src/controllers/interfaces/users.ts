import { RequestHandler } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { PreUserDto, UserDto } from 'src/dto';

export interface UsersController {
  createUser: RequestHandler<ParamsDictionary, UserDto, PreUserDto>;
}
