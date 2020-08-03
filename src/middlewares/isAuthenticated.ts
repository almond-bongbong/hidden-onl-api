import { Request } from 'express';

export default (request: Request): void => {
  if (!request.currentAccount) {
    throw Error('You need to log in to perform this action');
  }
};
