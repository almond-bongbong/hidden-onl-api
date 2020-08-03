import { CurrentAccount } from 'types/common';

declare global {
  namespace Express {
    export interface Request {
      currentAccount?: CurrentAccount;
    }
  }
}
