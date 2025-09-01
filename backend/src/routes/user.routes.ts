import { Router } from "express";
import type { Request, Response } from "express";


const userRoutes: Router = Router();

userRoutes.get("/", (req: Request, res: Response) => {
    res.send({ title: "user routes to get all users" })
});

userRoutes.get("/:id", (req: Request, res: Response) => {
    res.send({ title: "user routes for details" })
});

userRoutes.post("/", (req: Request, res: Response) => {
    res.send({ title: "user routes for creating new users" })
});

userRoutes.put("/:id", (req: Request, res: Response) => {
    res.send({ title: "user routes for updating users" })
});

userRoutes.delete("/:id", (req: Request, res: Response) => {
    res.send({ title: "user routes for deleting users" })
});

export default userRoutes;