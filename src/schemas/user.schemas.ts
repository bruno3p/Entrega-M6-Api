import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserLogin, IUserRequest, IUserResponse } from "../interfaces/users.interfaces";


const userLoginSerializer: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
  email: yup.string().email(),
  name: yup.string(),
  password: yup.string(),
  telefone: yup.string().required("Phone required"),
});

const userWithoutPasswordSchema: SchemaOf<IUserResponse> = yup.object().shape({
  id: yup.string().uuid(),
  name: yup.string(),
  email: yup.string().email(),
  telefone: yup.string().required("Phone required"),
  createdAt: yup.date(),
});

const userSchemaUpdate: SchemaOf<IUserRequest> = yup.object().shape({
  email: yup.string().email(),
  name: yup.string(),
  password: yup.string(),
  telefone: yup.string(),
});

export { userWithoutPasswordSchema, userSchema, userSchemaUpdate, userLoginSerializer };