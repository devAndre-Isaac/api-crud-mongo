import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router();

userRouter.post("/api/create/user", UserController.store);

userRouter.delete("/api/remove/user/:_id", UserController.remove);

export { userRouter };
