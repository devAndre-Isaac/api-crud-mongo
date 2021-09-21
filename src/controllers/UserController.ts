import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";

import { getValidData } from "../validation/validatorHandle";
import User from "../database/schemas/user";

class UserController {
  async create(req: Request, res: Response) {
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
    return res.status(200).json(user);
  }
  async update(req: Request, res: Response) {
    const repository = getMongoRepository(User);
    const { _id } = req.params;
    const idExists = await repository.findOne(_id);
    if (!idExists) {
      return res.send({ Message: "Identification does not exist" });
    } else {
      const userToUpdate = await repository.update(_id, req.body);
      const userUpdated = await repository.save(userToUpdate as any);
      return res.status(200).json(userUpdated);
    }
  }
}

export default new UserController();
