import { PreUserDto, UserDto } from 'src/dto';

export interface UsersRepository {
  createUser(user: PreUserDto): UserDto;
}
