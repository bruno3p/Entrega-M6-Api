import { Request, Response } from "express";
import updateContactService from "../../services/contact/updateContact.service";

const updateContactController = async (req: Request, res: Response) => {
  const updateContact = await updateContactService(req.body, req.params.id);
  return res.status(200).json(updateContact);
};

export default updateContactController;