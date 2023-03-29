import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entities";
import AppError from "../errors/AppError";



const FindPhoneAndEmailMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  if (req.body.email) {
    const findPhone: Contact = await contactRepository.findOneBy({
      telefone: req.body.telefone,
    });

    if (findPhone) {
      throw new AppError("There is already a contact with this phone", 403);
    }
    const findEmail: Contact = await contactRepository.findOneBy({
      email: req.body.email,
    });

    if (findEmail) {
      throw new AppError("There is already a contact with this email", 403);
    }
  }
  const findPhone: Contact = await contactRepository.findOneBy({
    telefone: req.body.telefone,
  });

  if (findPhone) {
    throw new AppError("There is already a contact with this phone", 403);
  }

  return next();
};

export default FindPhoneAndEmailMiddlewares;