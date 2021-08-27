import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";

import Company from "../database/schemas/company";
import { getValidData } from "../validation/validatorHandle";

class CompanyController {
  async store(req: Request, res: Response) {
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
  async remove(req: Request, res: Response) {
    const repository = getMongoRepository(Company);
    const { params } = getValidData(req);
    const companyToRemove = repository.delete(params.id);
    const company = repository.deleteOne(companyToRemove);
    return res.status(204).json(company);
  }
}

export default new CompanyController();
