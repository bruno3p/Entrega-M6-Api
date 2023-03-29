import { Request, Response } from "express";
import listContactService from "../../services/contact/listContacts.service";

const listContactController = async (req: Request, res: Response) => {
  const listContact = await listContactService(req.user);
  return res.status(200).json(listContact);
};

export default listContactController;