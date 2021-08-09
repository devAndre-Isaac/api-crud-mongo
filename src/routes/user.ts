import { Router, Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import User from "../database/schemas/user";

const userRouter = Router();

userRouter.get("/api/user", async (req: Request, res: Response) => {
  const repository = getMongoRepository(User);
  const userToRead = await repository.find();
  return res.json(userToRead);
});

userRouter.post("/api/user", async (req: Request, res: Response) => {
  const repository = getMongoRepository(User);

  const userToSave = repository.create(req.body);
  const user = await repository.save(userToSave);

  return res.status(201).json(user);
});

export { userRouter };
