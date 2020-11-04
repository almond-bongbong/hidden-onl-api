import { createError } from 'apollo-errors';

export const UnAuthenticatedError = createError('UnAuthenticated', {
  message: 'You need to log in to perform this action',
  data: {
    code: 40001,
  },
});
