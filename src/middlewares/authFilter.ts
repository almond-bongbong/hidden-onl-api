import { Request } from 'express';
import { CurrentAccount, Role } from 'types/graphql';

export const authenticationFilter = (request: Request): CurrentAccount => {
  if (!request.currentAccount) {
    throw Error('You need to log in to perform this action');
  } else {
    return request.currentAccount;
  }
};

export const authorityFilter = (request: Request, role: Role): CurrentAccount => {
  if (request.currentAccount?.role === 'ADMIN' || request.currentAccount?.role === role) {
    return request.currentAccount;
  }
  throw Error('You have no authority');
};
