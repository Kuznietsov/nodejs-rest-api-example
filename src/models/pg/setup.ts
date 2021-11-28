import { DEVELOPMENT_ENV } from '../../constants';
import { sequelize } from './connection';

export async function setupModels() {
  await sequelize.authenticate();
  if (process.env.NODE_ENV === DEVELOPMENT_ENV) {
    await sequelize.sync();
  }
}
