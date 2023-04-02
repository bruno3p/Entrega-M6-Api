import { Request, Response } from "express";
import retrieveUserService from "../../services/users/retrieveUser.service";

const retrieveUserController = async (req: Request, res: Response) => {
  const user = await retrieveUserService(req.user);
  return res.status(200).json(user);
};

export default retrieveUserController;