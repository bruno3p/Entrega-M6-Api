import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entities";
import { EntityTarget } from "typeorm";
import { Contact } from "../entities/contact.entities";
import AppError from "../errors/AppError";

const ensureItIsExistMiddleware =
  (entity: EntityTarget<User | Contact>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const entityRepository = AppDataSource.getRepository(entity);

    if (entity == User) {
      const find: User | Contact = await entityRepository.findOneBy({
        id: req.user.id,
      });

      if (!find) {
        throw new AppError("Not found", 404);
      }
    } else if (entity == Contact) {
      const find: User | Contact = await entityRepository.findOneBy({
        id: req.params.id,
      });

      if (!find) {
        throw new AppError("Not found", 404);
      }
    }

    return next();
  };

export default ensureItIsExistMiddleware;