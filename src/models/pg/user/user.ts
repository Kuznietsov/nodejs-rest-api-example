export interface UserAttributes {
  id: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
}

export type UserAttributesCreation = Omit<UserAttributes, 'id'>;
