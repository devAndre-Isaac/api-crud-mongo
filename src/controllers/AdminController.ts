import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";

import Company from "../database/schemas/company";
import User from "../database/schemas/user";

class AdminController {
  async readUser(req: Request, res: Response) {
    const repository = getMongoRepository(User);
    const userGetAll = await repository.findAndCount();
    return res.json({ Users: userGetAll });
  }
  async readUserById(req: Request, res: Response) {
    const repositoryId = getMongoRepository(User);
    const { _id } = req.params;
    const idReturn = await repositoryId.findOne(_id);
    if (!idReturn) {
      return res.send({ Message: "Identification does not exist" });
    }
    return res.json(idReturn);
  }

  async readCompany(req: Request, res: Response) {
    const repository = getMongoRepository(Company);
    const companyGetAll = await repository.findAndCount();
    return res.json({ Companies: companyGetAll });
  }
}

export default new AdminController();
