// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CurrentAccount } from 'types/graphql';
import { Request } from 'express';

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
}
