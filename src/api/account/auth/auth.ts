import { ResolversParentTypes } from 'types/graphql';
import { Args } from '@prisma/client/runtime/query';
import { Context } from 'types/type';

export default {
  Query: {
    auth: async (parent: ResolversParentTypes, args: Args, context: Context) =>
      context.isAuthenticated(),
  },
};
