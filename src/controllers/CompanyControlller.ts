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
  async update(req: Request, res: Response) {
    const repository = getMongoRepository(Company);
    const { _id } = req.params;
    const idExists = await repository.findOne(_id);
    if (!idExists) {
      return res.send({ Message: "Identification does not exist" });
    } else {
      const companyToUpdate = await repository.update(_id, req.body);
      const companyUpdated = await repository.save(companyToUpdate as any);
      return res.status(200).json(companyUpdated);
    }
  }
}

export default new CompanyController();
