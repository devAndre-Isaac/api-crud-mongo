import { Request, Response } from "express";
import { getMongoRepository } from "typeorm";
import bcrypt from "bcryptjs";
import User from "../database/schemas/user";
import jwt from "jsonwebtoken";

class AuthController {
  async auth(req: Request, res: Response) {
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
}

export default new AuthController();
