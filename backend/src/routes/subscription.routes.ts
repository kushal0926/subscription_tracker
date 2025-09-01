import { Router } from "express";
import type { Request, Response } from "express";

const subscriptionRoutes: Router = Router();

subscriptionRoutes.post("/", (req: Request, res: Response) => {
    res.send({ title: "subscription routes for all" })
});

subscriptionRoutes.get("/:id", (req: Request, res: Response) => {
    res.send({ title: "subscription routes for ids" })
});

subscriptionRoutes.post("/", (req: Request, res: Response) => {
    res.send({ title: "subscription routes for creating" })
});

subscriptionRoutes.put("/:id", (req: Request, res: Response) => {
    res.send({ title: "subscription routes for update" })
});

subscriptionRoutes.delete("/:id", (req: Request, res: Response) => {
    res.send({ title: "subscription routes for delete" })
});

subscriptionRoutes.get("/user/:id", (req: Request, res: Response) => {
    res.send({ title: "subscription routes for user ids" })
});

subscriptionRoutes.get("/:id/cancel", (req: Request, res: Response) => {
    res.send({ title: "subscription routes cancelling" })
});

subscriptionRoutes.get("/upcomming-renewals", (req: Request, res: Response) => {
    res.send({ title: "subscription routes cancelling" })
});


export default subscriptionRoutes;