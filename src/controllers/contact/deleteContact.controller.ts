import { Request, Response } from "express";
import deleteContactService from "../../services/contact/deleteContact.service";

const deleteUserController = async (req: Request, res: Response) => {

  await deleteContactService(req.params.id);

  return res.status(204).json({})
};

export default deleteUserController;