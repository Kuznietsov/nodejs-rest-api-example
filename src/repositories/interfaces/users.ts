import { PreUserDto, UserDto } from 'src/dto';

export interface UsersRepository {
  createUser(user: PreUserDto): Promise<UserDto>;
  findUserByLogin(login: string): Promise<UserDto | null>;
}
