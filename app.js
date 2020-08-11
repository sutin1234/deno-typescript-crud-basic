import { Application } from 'https://deno.land/x/oak/mod.ts';
import { green, yellow } from "https://deno.land/std@0.53.0/fmt/colors.ts";
import "https://deno.land/x/dotenv/load.ts"; // using .env
console.log(Deno.env.toObject().PORT);
// Router import 
import { mainRouter } from './routers/route.ts';
import { userRouter } from "./routers/users/user-route.ts";
var env = Deno.env.toObject();
var port = parseInt(env.PORT) || 5000;
var app = new Application();
// main routes
app.use(mainRouter.routes());
app.use(mainRouter.allowedMethods());
// product routes
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
// Running App
app.addEventListener("listen", function (_a) {
    var secure = _a.secure, hostname = _a.hostname, port = _a.port;
    var protocol = secure ? "https://" : "http://";
    var url = "" + protocol + (hostname !== null && hostname !== void 0 ? hostname : "localhost") + ":" + port;
    console.log(yellow("Deno Listening on:") + " " + green(url));
});
await app.listen({ port: port });
