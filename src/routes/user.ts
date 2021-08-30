import { Router } from "express";
import UserController from "../controllers/UserController";
import { createUserValidator } from "../validation/userValidator";

const userRouter = Router();

userRouter.post("/api/create/user", createUserValidator, UserController.store);

userRouter.delete("/api/remove/user/:_id", UserController.remove);

export { userRouter };
