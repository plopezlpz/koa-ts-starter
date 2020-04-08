import { Context } from 'koa';

export async function healthCheck(ctx: Context) {
  ctx.status = 200;
  ctx.body = 'OK';
}
