import decodeJWT from 'libs/jwt';
import { NextFunction, Request, Response } from 'express';
import { CurrentAccount } from 'types/common';

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.header('Authorization');
  if (token) {
    const payload = await decodeJWT(token);
    if (payload) {
      req.currentAccount = payload as CurrentAccount;
    } else {
      req.currentAccount = undefined;
    }
  }
  next();
};
