import { createError } from 'apollo-errors';
import { ErrorName } from '../types/graphql';

export const UnAuthenticatedError = createError(ErrorName.Unauthenticated, {
  message: 'You need to log in to perform this action',
  data: {
    code: 40001,
  },
});
