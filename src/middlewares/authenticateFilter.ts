import { Request } from 'express';
import { CurrentAccount } from 'types/graphql';

export default (request: Request): CurrentAccount => {
  if (!request.currentAccount) {
    throw Error('You need to log in to perform this action');
  } else {
    return request.currentAccount;
  }
};
