import { config } from "dotenv";

config({
    path: `.env.${process.env.NODE_ENV || "development"}.local`,
    quiet: true // disabling the tips of dotenv shown in the console
});

export const { PORT, NODE_ENV, MONGODB_URI } = process.env;
