import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import bcrypt from "bcryptjs";
import User from "../database/schemas/user";
import jwt from "jsonwebtoken";
import Company from "../database/schemas/company";

class AuthController {
  async authUser(req: Request, res: Response) {
    const repository = getMongoRepository(User);
    const { email, password } = req.body;
    const validUser = await repository.findOne({ where: { email } });
    if (!validUser) {
      return res.sendStatus(401);
    }
    const validPassword = await bcrypt.compare(password, validUser.password);
    if (!validPassword) {
      return res.sendStatus(401);
    }
    const token = jwt.sign({ id: validUser._id }, "secret", {
      expiresIn: "1d",
    });
    delete validUser.password;
    return res.json({ validUser, token });
  }
  async authCompany(req: Request, res: Response) {
    const repository =  getMongoRepository(Company)
    const { cnpj, password } = req.body
    const validCompany = await repository.findOne({where: { cnpj }})
    if(!validCompany){
      return res.sendStatus(401)
    }
    const validPassword = await bcrypt.compare(password, validCompany.password);
    if (!validPassword) {
      return res.sendStatus(401);
    }
    const token = jwt.sign({ id: validCompany._id }, "secret", {
      expiresIn: "1d",
    });
    delete validCompany.password;
    return res.json({ validCompany, token });
  }
  }
}

export default new AuthController();
