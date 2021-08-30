import { body } from "express-validator";

export const createCompanyValidator = [
  body("name")
    .isLength({ max: 50 })
    .not()
    .notEmpty()
    .withMessage("O campo nome é obrigatorio."),
  body("phone").isLength({ max: 12 }).optional({ nullable: true }),
  body("cnpj")
    .isLength({ min: 14, max: 14 })
    .notEmpty()
    .withMessage("CNPJ inválido"),
  body("password")
    .isLength({ max: 50 })
    .notEmpty()
    .withMessage("Campo Senha Obrigatorio."),
];
