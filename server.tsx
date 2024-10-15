import { Application, Router } from "https://deno.land/x/oak@v17.1.0/mod.ts";

const app = new Application();

const router = new Router();
router.get("/", handlePage);

app.use(router.routes());
app.use(router.allowedMethods());

console.log("server is running on http://localhost:8000/");
import { procesateDataObj } from "./core-services/service/user.service.ts";

export function add(a: number, b: number): number {
  return a + b;
}
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Perrita"));

procesateDataObj();
await app.listen({ port: 8000 });

function handlePage(ctx: any) {
  try {
    ctx.response.body = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body >
    <div id="root"><h1>Hello SSR</h1></div>
  </body>
  </html>`;
  } catch (error) {
    console.error(error);
  }
}