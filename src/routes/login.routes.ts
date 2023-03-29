import { Router } from "express";
import { createLoginController } from "../controllers/user/create.login.controler";

import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middlewares";
import { userLoginSerializer } from "../schemas/user.schemas";

const loginRouter: Router = Router();

loginRouter.post(
  "",
  ensureDataIsValidMiddleware(userLoginSerializer),
  createLoginController
);

export default loginRouter;