import env from './env';
import { PgDatabaseConfig } from '../types';

const config: PgDatabaseConfig = {
  PG_HOST: env.PG_HOST,
  PG_USER: env.PG_USER,
  PG_PASSWORD: env.PG_PASSWORD,
  PG_DATABASE: env.PG_DATABASE,
  PG_PORT: env.PG_PORT,
};

export default config;
