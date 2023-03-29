export interface IContactRequest {
  name:string;
  email?:string;
  telefone:string;
}

export interface IContactResponse extends IContactRequest{
  id:string;
  createdAt:Date;
}


export interface IContactUpdateRequest {
  name?:string;
  email?:string;
  telefone?:string;
}
  