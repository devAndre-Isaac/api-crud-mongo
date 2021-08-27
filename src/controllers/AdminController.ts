import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import User from "../database/schemas/user";

class AdminController {
  async readUser(req: Request, res: Response) {
    const repository = getMongoRepository(User);
    const userGetAll = await repository.findAndCount();
    return res.json({ users: userGetAll });
  }
}

export default new AdminController();
