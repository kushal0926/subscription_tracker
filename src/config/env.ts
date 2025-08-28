import { config } from "dotenv";

config({
    path: `.env.${process.env.NODE_ENV || "development"}.local`, 
    debug: false,
});

export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || "development";