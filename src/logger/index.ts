import env from '../config/env';
import { PRODUCTION_ENV } from '../constants';
import {
  createLogger as createWinstonLogger,
  transports,
  format,
  config as winsonConfig,
} from 'winston';
import config from '../config/winston';

export const createLogger = (service: string) => {
  const logger = createWinstonLogger({
    levels: winsonConfig.syslog.levels,
    defaultMeta: { service },
    format: format.combine(format.timestamp(), format.json()),
    transports: [
      new transports.File({ filename: config.COMBINE_LOG_FILE }),
      new transports.File({
        filename: config.ERROR_LOG_FILE,
        level: 'error',
      }),
    ],
  });
  if (env.NODE_ENV !== PRODUCTION_ENV) {
    logger.add(
      new transports.Console({
        level: 'info',
        format: format.combine(
          format.timestamp(),
          format.simple(),
          format.prettyPrint({}),
          format.splat(),
          format.colorize({ all: true })
        ),
      })
    );
  }

  return logger;
};
