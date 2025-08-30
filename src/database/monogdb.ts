import mongoose from "mongoose";
import { MONGODB_URI, NODE_ENV } from "../config/env.ts";

// making it throw an error if the mongodb uri is empty inside the environment variable
if (!MONGODB_URI) {
    throw new Error(`Define the MONGODB_URI in the environment variable inside .env.<development/production>.local`);
}

const connectDatabase = async (): Promise<void> => {
    try {
        await mongoose.connect(MONGODB_URI as string)
        console.log(`connected to mongodb database in ${NODE_ENV} mode`);

    } catch (error: unknown) {
        console.log("failed to connect to mongodb:", error);
    }
}

export default connectDatabase;