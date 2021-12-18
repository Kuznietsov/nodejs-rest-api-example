export type ENV = 'development' | 'production';

export interface PgDatabaseConfig {
  PG_HOST: string;
  PG_USER: string;
  PG_PASSWORD: string;
  PG_DATABASE: string;
  PG_PORT: number | string;
}

export interface LoggerConfig {
  COMBINE_LOG_FILE?: string;
  ERROR_LOG_FILE?: string;
}

export type ENV_CONFIG = { NODE_ENV?: ENV } & PgDatabaseConfig & LoggerConfig;

export type PURE_ENV_CONFIG = ENV_CONFIG & Record<string, string | number>;
