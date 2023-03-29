import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { IContactUpdateRequest, IContactResponse } from "../../interfaces/contacts.interface";
import { contactResponseSchema } from "../../schemas/contact.schemas";

const updateContactService = async (
  contactData: IContactUpdateRequest,
  contactId: string
): Promise<IContactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contactFind: Contact = await contactRepository.findOneBy({
    id: contactId,
  });
  const contact: Contact = await contactRepository.save({
    ...contactFind,
    ...contactData,
  });

  return await contactResponseSchema.validate(contact, { stripUnknown: true });
};

export default updateContactService;