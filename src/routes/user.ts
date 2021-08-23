import { Router, Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import User from "../database/schemas/user";
import { getValidData } from "../validation/validatorHandle";
import UserController from "../controllers/UserController";

const userRouter = Router();

userRouter.get("/api/user", UserController.read);

userRouter.post("/api/user", UserController.store);

userRouter.delete("/api/user/:_id", UserController.remove);

export { userRouter };
