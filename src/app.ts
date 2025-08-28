import express from "express";
import type { Express, Request, Response } from "express";
import { PORT } from "./config/env.ts";
import authRoutes from "./routes/auth.routes.ts";
import userRoutes from "./routes/user.routes.ts";
import subscriptionRoutes from "./routes/subscription.routes.ts";

const app: Express = express();

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/subscription", subscriptionRoutes);



app.get("/", (req: Request, res: Response) => {
  res.send(`making the subscription tracking app and something olay`);
});

app.listen(PORT, () => {
  console.log(`the server is running in the http://localhost:${PORT}`);
});


