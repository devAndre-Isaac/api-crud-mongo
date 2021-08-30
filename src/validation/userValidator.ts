import { body } from "express-validator";

export const createUserValidator = [
  body("name")
    .isLength({ max: 50 })
    .not()
    .notEmpty()
    .withMessage("O campo nome é obrigatorio."),
  body("email").isEmail().notEmpty().withMessage("O campo nome é obrigatorio."),
  body("cpf")
    .isLength({ min: 14, max: 14 })
    .notEmpty()
    .withMessage("CNPJ inválido"),
  body("password")
    .isLength({ max: 50 })
    .notEmpty()
    .withMessage("Campo Senha Obrigatorio."),
];
