import { PreUserDto, UserDto } from '../../dto';

export interface UsersService {
  createUser(user: PreUserDto): UserDto;
}
