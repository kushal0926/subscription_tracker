import { config } from "dotenv";

config({
    path: `.env.${process.env.NODE_ENV || "development"}.local`,
    quiet: true // disabling the tips of dotenv shown in the console
});

// Export environment variables
export const PORT: string = process.env.PORT || "3000";
export const NODE_ENV: string = process.env.NODE_ENV || "development";
export const MONGODB_URI: string = process.env.MONGODB_URI || "";
export const JWT_SECRET: string = process.env.JWT_SECRET || "secret";