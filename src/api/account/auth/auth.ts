import { ResolversParentTypes } from 'types/graphql';
import { Context } from 'types/type';

export default {
  Query: {
    auth: async (parent: ResolversParentTypes, args: unknown, context: Context) =>
      context.isAuthenticated(),
  },
};
