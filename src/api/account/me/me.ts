import { ResolversParentTypes } from 'types/graphql';
import { Context } from 'types/type';
import { prisma } from 'index';

export default {
  Query: {
    me: (parent: ResolversParentTypes, args: unknown, context: Context) => {
      const currentAccount = context.isAuthenticated();
      return prisma.account.findOne({
        include: {
          thumbnail: true,
        },
        where: {
          id: currentAccount.id,
        },
      });
    },
  },
};
