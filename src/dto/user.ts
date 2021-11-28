export interface UserDto {
  id: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
}

export type PreUserDto = Omit<UserDto, 'id'>;
