import { injectable } from 'inversify';
import 'reflect-metadata';
import { PreUserDto, UserDto } from '../../../dto';
import { Mapper } from '../../../core';
import { UserAttributes, UserAttributesCreation } from './user';

@injectable()
export class UserMapper
  implements Mapper<UserDto | PreUserDto, UserAttributes | UserAttributesCreation>
{
  toDomain(dalEntity: UserAttributes): UserDto {
    return { ...dalEntity };
  }

  toDalEntity(domain: UserDto | PreUserDto): UserAttributes | UserAttributesCreation {
    return { ...domain };
  }
}
