import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";


const phoneNumberValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.telefone) {
    const brazilianPhoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/gi;

    if (brazilianPhoneRegex.test(req.body.telefone) == false) {
      throw new AppError(
        "the phone number must be in this format: (xx) xxxxx-xxxx"
      );
    }
  }

  return next();
};

export default phoneNumberValidationMiddleware;