import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router();

userRouter.get("/read/user", UserController.read);

userRouter.post("/create/user", UserController.store);

userRouter.delete("/remove/user/:_id", UserController.remove);

export { userRouter };
