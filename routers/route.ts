import { Router } from 'https://deno.land/x/oak/mod.ts';
const mainRouter = new Router()

mainRouter.get("/", (ctx) => {
    ctx.response.body = "Hello Deno";
});

mainRouter.get("/api", (ctx) => {
    ctx.response.body = "Hello Deno RespAPI";
});

export  { mainRouter }