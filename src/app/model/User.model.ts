import {Role} from "./Role.enum";

export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  networkID: string;
  phoneNumber: string;
  email: string;
  role: Role;
  token?: string;
}
