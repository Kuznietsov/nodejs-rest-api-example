import Joi, { ObjectSchema } from 'joi';
import { ENV, ENV_CONFIG, PURE_ENV_CONFIG } from '../types';
import { DEVELOPMENT_ENV, PRODUCTION_ENV } from '../constants';

type SchemaFactory = (defaultConfig: Partial<ENV_CONFIG> | null) => ObjectSchema<ENV_CONFIG>;

const develomentSchemaFactory: SchemaFactory = (defaultConfig) =>
  Joi.object<ENV_CONFIG>()
    .keys({
      NODE_ENV: Joi.string().valid(DEVELOPMENT_ENV).default(DEVELOPMENT_ENV),
      PG_HOST: Joi.string().hostname().default(defaultConfig?.PG_HOST),
      PG_USER: Joi.string().default(defaultConfig?.PG_USER),
      PG_PASSWORD: Joi.string().default(defaultConfig?.PG_PASSWORD),
      PG_DATABASE: Joi.string().default(defaultConfig?.PG_DATABASE),
      PG_PORT: Joi.number().port().default(defaultConfig?.PG_PORT),
    })
    .unknown();

const productionSchemaFactory: SchemaFactory = () =>
  Joi.object<ENV_CONFIG>()
    .keys({
      NODE_ENV: Joi.string().valid(PRODUCTION_ENV).required(),
      PG_HOST: Joi.string().hostname().required(),
      PG_USER: Joi.string().required(),
      PG_PASSWORD: Joi.string().required(),
      PG_DATABASE: Joi.string().required(),
      PG_PORT: Joi.number().port().required(),
    })
    .unknown();

const schemaFactories: Record<ENV, SchemaFactory> = {
  [DEVELOPMENT_ENV]: develomentSchemaFactory,
  [PRODUCTION_ENV]: productionSchemaFactory,
};

export const validateEnv = (
  env: PURE_ENV_CONFIG | Record<string, string | number>,
  defaultConfig: Partial<ENV_CONFIG> | null = null
): ENV_CONFIG => {
  const envSchemaFactory = schemaFactories[(env as ENV_CONFIG).NODE_ENV ?? DEVELOPMENT_ENV];
  const { value, error } = envSchemaFactory(defaultConfig).validate(env);
  if (error) {
    throw new Error(`Invalid environment: ${error.message}`);
  }
  return value;
};
