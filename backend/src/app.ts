import express from "express";
import type { Express, Request, Response } from "express";
import { PORT } from "./config/env.ts";
import authRoutes from "./routes/auth.routes.ts";
import userRoutes from "./routes/user.routes.ts";
import subscriptionRoutes from "./routes/subscription.routes.ts";
import connectDatabase from "./database/mongodb.ts";
import errorMiddlware from "./middleware/error.middleware.ts";
import cookieParser from "cookie-parser"

const app: Express = express();
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/subscription", subscriptionRoutes);
// error handler
app.use(errorMiddlware);

app.get("/", (req: Request, res: Response) => {
  res.send(`making the subscription tracking app and something olay`);
});


const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`the server is running in the http://localhost:${PORT}`);
    });
    await connectDatabase();
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

export default app;


