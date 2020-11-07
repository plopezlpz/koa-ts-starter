import { Context } from "koa";

export const healthCheck = (ctx: Context): void => {
  ctx.status = 200;
  ctx.body = "OK";
};
