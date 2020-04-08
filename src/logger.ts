import * as bunyan from 'bunyan';
import { serverVars } from './variables';

export const logger = bunyan.createLogger({
  name: process.env.npm_package_name,
  level: serverVars.logLevel,
  stream: process.stdout,
  serializers: bunyan.stdSerializers
});