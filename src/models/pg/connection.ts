import { Sequelize } from 'sequelize';
import config from '../../config/pg';

export const sequelize = new Sequelize(config.PG_DATABASE, config.PG_USER, config.PG_PASSWORD, {
  host: config.PG_HOST,
  dialect: 'postgres',
});
