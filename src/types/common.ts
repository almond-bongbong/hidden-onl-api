import { Role } from 'types/graphql';

export interface CurrentAccount {
  id: string;
  name: string;
  role: Role;
  iat: number;
  exp: number;
  iss: 'max.corp';
}
