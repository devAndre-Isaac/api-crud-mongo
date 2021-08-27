import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router();

userRouter.post("/create/user", UserController.store);

userRouter.delete("/remove/user/:_id", UserController.remove);

export { userRouter };
