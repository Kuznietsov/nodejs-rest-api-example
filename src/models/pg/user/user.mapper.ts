import { UserDto } from '../../../dto';
import { Mapper } from '../../../core';
import { UserAttributes } from './user';

export class UserMapper implements Mapper<UserDto, UserAttributes> {
  toDomain(dalEntity: UserAttributes): UserDto {
    return { ...dalEntity };
  }

  toDalEntity(domain: UserDto): UserAttributes {
    return { ...domain, isDeleted: false };
  }
}
