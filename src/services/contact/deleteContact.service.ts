import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entities";

const deleteContactService = async (ContactId: string): Promise<void> => {
  const userRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const deletedUser: Contact = await userRepository.findOneBy({
    id: ContactId,
  });

  await userRepository
    .createQueryBuilder()
    .delete()
    .from(Contact)
    .where("id = :id", { id: deletedUser.id })
    .execute();
};

export default deleteContactService;