import { Router, Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import User from "../database/schemas/user";
import { getValidData } from "../validation/validatorHandle";

const userRouter = Router();

userRouter.get("/api/user", async (req: Request, res: Response) => {
  const { header } = req.headers
  if(header === undefined){
    return res.sendStatus(400)
  } 
  const repository = getMongoRepository(User);
  const userToRead = await repository.findAndCount();
  return res.json(userToRead);
});

userRouter.post("/api/user", async (req: Request, res: Response) => {
  const repository = getMongoRepository(User);

  const userToSave = repository.create(req.body);
  const user = await repository.save(userToSave);

  return res.status(201).json(user);
});

userRouter.delete("/api/user/:_id", async (req: Request, res: Response) => {
  const repository = getMongoRepository(User);
  const { params } = getValidData(req);
  const userToRemove = repository.delete(params.id);
  const user = repository.deleteOne(userToRemove)
  return res.status(204).json(user);
});

export { userRouter };
