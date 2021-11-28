import { PgDatabaseConfig, PURE_ENV_CONFIG } from '../types';
import { validateEnv } from '../validators';

const defaultConfig = {
  PG_DATABASE: 'rest_dev',
  PG_USER: 'root',
  PG_PASSWORD: '11111111',
  PG_HOST: '127.0.0.1',
  PG_PORT: 5432,
};

const processEnv = process.env as PURE_ENV_CONFIG;

const env = validateEnv(processEnv, defaultConfig);

const config: PgDatabaseConfig = {
  PG_HOST: env.PG_HOST,
  PG_USER: env.PG_USER,
  PG_PASSWORD: env.PG_PASSWORD,
  PG_DATABASE: env.PG_DATABASE,
  PG_PORT: env.PG_PORT,
};

export default config;
