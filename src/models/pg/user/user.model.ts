import { DataTypes, Model, UUIDV4 } from 'sequelize';
import { UserAttributes, UserAttributesCreation } from './user';
import { sequelize } from '../connection';

export class UserModel
  extends Model<UserAttributes, UserAttributesCreation>
  implements UserAttributes
{
  public id!: string;
  public name!: string;
  public login!: string;
  public password!: string;
  public age!: number;
  public isDeleted!: boolean;
}

UserModel.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
      allowNull: false,
      defaultValue: UUIDV4,
    },
    login: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    age: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    isDeleted: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
  },
  { tableName: 'users', sequelize }
);
