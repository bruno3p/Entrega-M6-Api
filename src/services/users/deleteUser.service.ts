import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import { IReqTokenUser } from "../../interfaces/users.interfaces";


const deleteUserService = async (userId: IReqTokenUser): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const deletedUser: User = await userRepository.findOneBy({
    id: userId.id,
  });

  await userRepository
    .createQueryBuilder()
    .delete()
    .from(User)
    .where("id = :id", { id: deletedUser.id })
    .execute();
};

export default deleteUserService;