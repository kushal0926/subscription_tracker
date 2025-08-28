import { Router } from "express";
import type { Request, Response } from "express";

const authRoutes: Router = Router();

authRoutes.post("/sign-up", (req: Request, res: Response) => {
    res.send({ title: "Sign Up" });
});

authRoutes.post("/sign-in", (req: Request, res: Response) => {
    res.send({ title: "Sign in" });
});

authRoutes.post("/sign-out", (req: Request, res: Response) => {
    res.send({ title: "Sign out" });
});

export default authRoutes;
