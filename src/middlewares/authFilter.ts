import { Request } from 'express';
import { CurrentAccount, Role } from 'types/graphql';
import { UnAuthenticatedError } from '../constants/error';

export const authenticationFilter = (request: Request): CurrentAccount => {
  if (!request.currentAccount) {
    throw new UnAuthenticatedError();
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
