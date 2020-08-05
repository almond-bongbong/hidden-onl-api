import { ResolversParentTypes } from 'types/graphql';
import { Args } from '@prisma/client/runtime/query';
import { Context } from 'types/type';
import { prisma } from 'index';

export default {
  Query: {
    me: (parent: ResolversParentTypes, args: Args, context: Context) => {
      const currentAccount = context.isAuthenticated();
      return prisma.account.findOne({
        where: {
          id: currentAccount.id,
        },
      });
    },
  },
};
