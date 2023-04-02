import { Request, Response } from 'express';
import createLoginService from '../../services/users/createLogin.service';


const createLoginController = async (req: Request, res: Response) => {
  const token = await createLoginService(req.body);
  return res.status(201).json(token);
};

export { createLoginController };