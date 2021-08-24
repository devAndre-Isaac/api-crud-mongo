import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";

import Company from "../database/schemas/company";

class CompanyController {
  async read(req: Request, res: Response) {
    const { header } = req.headers;
    if (header === undefined) {
      return res.sendStatus(400);
    }
    const repository = getMongoRepository(Company);
    const companyToRead = await repository.findAndCount();
    return res.json(companyToRead);
  }
}

export default new CompanyController();
