
import express from "express";
import type { Express, Request, Response } from "express";
import { PORT } from "./config/env.ts"

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send(`making the subscription tracking app and something olay`);
});


app.listen(PORT, () => {
  console.log(`the server is running in the http://localhost:${PORT}`);
});


