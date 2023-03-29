import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { IUserUpdate, IReqTokenUser, IUserResponse } from "../../interfaces/users.interfaces";
import { userWithoutPasswordSchema } from "../../schemas/user.schemas";

const updateUserService = async (
  body: IUserUpdate,
  userId: IReqTokenUser
): Promise<IUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userFind: User = await userRepository.findOneBy({ id: userId.id });

  const user: User = await userRepository.save({
    ...userFind,
    ...body,
  });  
  return await userWithoutPasswordSchema.validate(user, { stripUnknown: true });
};

export default updateUserService;