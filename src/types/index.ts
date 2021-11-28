export type ENV = 'development' | 'production';

export interface PgDatabaseConfig {
  PG_HOST: string;
  PG_USER: string;
  PG_PASSWORD: string;
  PG_DATABASE: string;
  PG_PORT: number | string;
}

export type PURE_ENV_CONFIG = { NODE_ENV?: ENV } & PgDatabaseConfig &
  Record<string, string | number>;
export type ENV_CONFIG = { NODE_ENV?: ENV } & PgDatabaseConfig;
