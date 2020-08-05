import { CurrentAccount, ResolversParentTypes } from 'types/graphql';
import { Args } from '@prisma/client/runtime/query';
import { Context } from 'types/type';

export default {
  Query: {
    auth: async (
      parent: ResolversParentTypes,
      args: Args,
      context: Context,
    ): Promise<CurrentAccount> => {
      const currentAccount = context.isAuthenticated();
      console.log(context);
      console.log('=====================');
      console.log(currentAccount);
      return currentAccount;
    },
  },
};
