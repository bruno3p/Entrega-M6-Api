import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { IReqTokenUser, IUserResponse } from "../../interfaces/users.interfaces";
import { userWithoutPasswordSchema } from "../../schemas/user.schemas";

const retrieveUserService = async (
  user: IReqTokenUser
): Promise<IUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const find: User = await userRepository.findOneBy({
    id: user.id,
  });

  const validatedUser: IUserResponse = await userWithoutPasswordSchema.validate(
    find,
    {
      stripUnknown: true,
    }
  );

  return validatedUser;
};

export default retrieveUserService;