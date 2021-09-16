import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import Company from "../database/schemas/company";
import User from "../database/schemas/user";

class AdminController {
  async readUser(req: Request, res: Response) {
    const { form } = req.headers;
    if (form === undefined) {
      return res.send("insert form in header");
    }
    const repository = getMongoRepository(User);
    const userGetAll = await repository.findAndCount();
    return res.json({ users: userGetAll, form });
  }
  async readCompany(req: Request, res: Response) {
    const { form } = req.headers;
    if (form === undefined) {
      return res.send("insert form in header");
    }
    const repository = getMongoRepository(Company);
    const companyGetAll = await repository.findAndCount();
    return res.json({ companies: companyGetAll, form });
  }
}

export default new AdminController();
