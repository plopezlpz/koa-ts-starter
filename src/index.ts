import * as Koa from 'koa';
import * as koaBody from 'koa-body';
import * as cors from '@koa/cors';

import * as koaBunyanLogger from 'koa-bunyan-logger';

import { serverVars } from './variables';
import { routes } from './routes';
import { logger } from './logger';

const app = new Koa();

app.use(koaBody());
app.use(cors());
app.use(koaBunyanLogger(logger));
app.use(koaBunyanLogger.requestLogger());
app.use(koaBunyanLogger.timeContext());
app.use(routes);
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});

app.listen(serverVars.port, serverVars.host)
  .on('listening', () => console.log(`Server running on port ${serverVars.port}`))
  .on('close', () => console.log('on close'))
  .on('error', (err) => console.log('on error', err));

