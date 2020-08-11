import { Application } from 'https://deno.land/x/oak/mod.ts'
import { green, yellow } from "https://deno.land/std@0.53.0/fmt/colors.ts";
import "https://deno.land/x/dotenv/load.ts"; // using .env

declare var Deno: any;
// console.log(Deno.env.toObject().PORT);

// Router import 
import { mainRouter } from './routers/route.ts'
import { userRouter } from "./routers/users/user-route.ts";

let env = Deno.env.toObject()
const port: number = parseInt(env.PORT) || 5000
const app = new Application()

// main routes
app.use(mainRouter.routes())
app.use(mainRouter.allowedMethods())

// product routes
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// Running App
app.addEventListener("listen", ({ secure, hostname, port }) => {
    const protocol = secure ? "https://" : "http://";
    const url = `${protocol}${hostname ?? "localhost"}:${port}`;
    console.log(`${yellow("Deno Listening on:")} ${green(url)}`);
});
await app.listen({ port });