// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CurrentAccount } from 'types/graphql';

declare global {
  export namespace Context {
    isAuthenticated: () => CurrentAccount;
  }
  namespace Express {
    export interface Request {
      currentAccount?: CurrentAccount;
    }
  }
}
