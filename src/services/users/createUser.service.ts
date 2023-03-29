import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import AppError from "../../errors/AppError";
import { IUserRequest, IUserResponse } from "../../interfaces/users.interfaces";
import { userWithoutPasswordSchema } from "../../schemas/user.schemas";

const createUserService = async (
  user: IUserRequest
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const findPhone: User = await userRepository.findOneBy({
    telefone: user.telefone,
  });

  if (findPhone) {
    throw new AppError("There is already a contact with this phone", 403);
  }
  const findEmail: User = await userRepository.findOneBy({
    email: user.email,
  });

  if (findEmail) {
    throw new AppError("There is already a contact with this email", 403);
  }

  const createUser = userRepository.create(user);

  await userRepository.save(createUser);

  const userWithoutPassword = await userWithoutPasswordSchema.validate(
    createUser,
    {
      stripUnknown: true,
    }
  );

  return userWithoutPassword;
};

export default createUserService;
