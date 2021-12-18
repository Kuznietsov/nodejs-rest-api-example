import defaultConfig from './default_config';
import { PURE_ENV_CONFIG } from '../types';
import { validateEnv } from '../validators';

const processEnv = process.env as PURE_ENV_CONFIG;
const env = validateEnv(processEnv, defaultConfig);

export default env;
