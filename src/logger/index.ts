import {
  createLogger as createWinstonLogger,
  transports,
  format,
  config as winsonConfig,
} from 'winston';
import config from '../config/winston';

export const createLogger = (service: string) =>
  createWinstonLogger({
    levels: winsonConfig.syslog.levels,
    defaultMeta: { service },
    format: format.combine(format.timestamp(), format.json()),
    transports: [
      new transports.File({ filename: config.COMBINE_LOG_FILE }),
      new transports.File({
        filename: config.ERROR_LOG_FILE,
        level: 'error',
      }),
      new transports.Console({
        level: 'info',
        format: format.combine(format.timestamp(), format.simple(), format.colorize()),
      }),
    ],
  });
