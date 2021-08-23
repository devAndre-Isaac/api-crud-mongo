import { Router, Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import User from "../database/schemas/user";
import { getValidData } from "../validation/validatorHandle";
import UserController from "../controllers/UserController";

const userRouter = Router();

userRouter.get("/api/user", UserController.read);

userRouter.post("/api/user", UserController.store);

userRouter.delete("/api/user/:_id", async (req: Request, res: Response) => {
  const repository = getMongoRepository(User);
  const { params } = getValidData(req);
  const userToRemove = repository.delete(params.id);
  const user = repository.deleteOne(userToRemove);
  return res.status(204).json(user);
});

export { userRouter };
