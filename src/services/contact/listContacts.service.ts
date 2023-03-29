import AppDataSource from "../../data-source";
import { Repository } from "typeorm";
import { Contact } from "../../entities/contact.entities";
// import { IReqTokenUser } 

const listContactService = async (userId) => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact[] = await contactRepository
    .createQueryBuilder("contact")
    .where("contact.user = :userId", { userId: userId.id })
    .getMany();

  return contact;
};

export default listContactService;