import { LogLevelString } from 'bunyan';

const serverVars = {
  host: process.env.HOST || 'localhost',
  port: parseInt(process.env.PORT, 10) || 3000,
  logLevel: (process.env.LOG_LEVEL as LogLevelString) || 'debug'
};

export {
  serverVars
};
