import { auth } from "express-openid-connect";
import { SESSION_SECRET, BASE_URL, CLIENT_ID, ISSUER_BASE_URL } from "../config/env.ts";

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: SESSION_SECRET,
    baseURL: BASE_URL,
    clientID: CLIENT_ID,
    issuerBaseURL: ISSUER_BASE_URL
};

export const authMiddleware = auth(config);