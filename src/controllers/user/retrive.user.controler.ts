import retrieveUserService from "../../services/User/retrieveUser.service";
import { Request, Response } from "express";

const retrieveUserController = async (req: Request, res: Response) => {
  const user = await retrieveUserService(req.user);
  return res.status(200).json(user);
};

export default retrieveUserController;