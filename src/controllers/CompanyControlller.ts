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
  async store(req: Request, res: Response){
    const repository = getMongoRepository(Company);
    const { cnpj } = req.body;
    const companyExists = await repository.findOne({ where: { cnpj } });
    if (companyExists) {
      return res.sendStatus(409);
    }
    const companyToCreate = repository.create(req.body);
    const company = await repository.save(companyToCreate);
    return res.status(201).json(company);
  }
}

export default new CompanyController();
