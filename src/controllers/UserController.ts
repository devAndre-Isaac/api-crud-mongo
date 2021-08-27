import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";

import { getValidData } from "../validation/validatorHandle";
import User from "../database/schemas/user";

class UserController {
  async store(req: Request, res: Response) {
    const repository = getMongoRepository(User);
    const { email, cpf } = req.body;
    const userExists = await repository.findOne({ where: { email, cpf } });
    if (userExists) {
      return res.json(400);
    }
    const userToSave = repository.create(req.body);
    const user = await repository.save(userToSave);

    return res.status(201).json(user);
  }
  async remove(req: Request, res: Response) {
    const repository = getMongoRepository(User);
    const { params } = getValidData(req);
    const userToRemove = repository.delete(params.id);
    const user = repository.deleteOne(userToRemove);
    return res.status(204).json(user);
  }
}

export default new UserController();
