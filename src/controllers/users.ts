import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { PreUserDto, UserDto } from 'src/dto';
import identifiers from '../services/identifiers';
import { UsersService } from '../services/interfaces';
import { Response, Request, UsersController } from './interfaces';

@injectable()
export class UsersControllerImpl implements UsersController {
  constructor(@inject(identifiers.USERS_SERVICE) private readonly usersService: UsersService) {}

  createUser(req: Request<PreUserDto, UserDto>, res: Response<UserDto>) {
    const user = this.usersService.createUser(req.body);
    return res.send(user);
  }
}
