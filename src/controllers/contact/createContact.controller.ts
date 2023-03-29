import { Request, Response } from "express";
import createContactService from "../../services/contact/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const contact = await createContactService(req.body, req.user);
  return res.status(201).json(contact);
};

export default createContactController;