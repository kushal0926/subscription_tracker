import express  from "express";
import type {Express, Request, Response} from "express"

const app: Express = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(`making the subscription tracking app`);
});

app.listen(PORT, () => {
  console.log(`the server is running in the http://localhost:${PORT}`);
});
