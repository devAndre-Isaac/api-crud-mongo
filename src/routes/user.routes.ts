import { Router } from "express";
import UserController from "../controllers/UserController";
import { createUserValidator } from "../validation/userValidator";

const userRouter = Router();

userRouter.post("/api/create/user", createUserValidator, UserController.create);
userRouter.delete("/api/remove/user/:_id", UserController.remove);
userRouter.put("/api/update/user/:_id", UserController.update);

export { userRouter };
