import { Router } from 'https://deno.land/x/oak/mod.ts';
var mainRouter = new Router();
mainRouter.get("/", function (ctx) {
    ctx.response.body = "Hello Deno";
});
mainRouter.get("/api", function (ctx) {
    ctx.response.body = "Hello Deno RespAPI";
});
export { mainRouter };
