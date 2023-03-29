import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContactRequest, IContactResponse } from "../interfaces/contacts.interface";



const contactRequestSchema: SchemaOf<IContactRequest> = yup.object().shape({
  name: yup.string().required("Name required"),
  email: yup.string().email().notRequired(),
  telefone: yup.string().required("Phone required"),
});

const contactResponseSchema: SchemaOf<IContactResponse> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required("Name required"),
  email: yup.string().email().notRequired(),
  telefone: yup.string().required("Phone required"),
  createdAt: yup.date(),
});

export { contactRequestSchema, contactResponseSchema };