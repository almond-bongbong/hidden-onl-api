// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CurrentAccount, Role } from 'types/graphql';
import { Request } from 'express';

declare module '*.txt';

declare global {
  namespace Express {
    export interface Request {
      currentAccount?: CurrentAccount;
    }
  }
}

export interface Context {
  request: Request;
  isAuthenticated: () => CurrentAccount;
  isAuthorized: (role: Role) => CurrentAccount;
}
