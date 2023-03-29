import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { IContactRequest } from "../../interfaces/contacts.interface";
import { IReqTokenUser } from "../../interfaces/users.interfaces";
import { contactResponseSchema } from "../../schemas/contact.schemas";

const createContactService = async (
  body: IContactRequest,
  userId: IReqTokenUser
): Promise<IContactRequest> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const newContact: Contact = contactRepository.create({
    ...body,
    user: userId,
  });

  await contactRepository.save(newContact);

  return await contactResponseSchema.validate(newContact, {
    stripUnknown: true,
  });
};

export default createContactService;