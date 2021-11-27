import { injectable } from 'inversify';
import 'reflect-metadata';

import { PreUserDto, UserDto } from 'src/dto';
import { Response, Request, UsersController } from './interfaces';

@injectable()
export class UsersControllerImplementation implements UsersController {
  createUser(req: Request<PreUserDto, UserDto>, res: Response<UserDto>) {
    return res.send({ name: 'name', id: 'id' });
  }
}
