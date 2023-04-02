import { Request, Response } from "express";
import updateUserService from "../../services/users/updateUser.service";


const updateUserController = async (req: Request, res: Response) => {
  const user = await updateUserService(req.body, req.user);
  return res.json(user);
};

export default updateUserController;