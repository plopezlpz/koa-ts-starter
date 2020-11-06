import * as Router from "koa-router";
import { healthCheck } from "./controllers/health";

const router = new Router();
router
  // Health check
  .get("/health", healthCheck);

export const routes = router.routes();
