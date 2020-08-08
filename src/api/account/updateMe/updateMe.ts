import { MutationResponse, MutationUpdateMeArgs, ResolversParentTypes } from 'types/graphql';
import { Context } from 'types/type';
import { prisma } from 'index';
import { AccountResponse } from 'constants/response';

export default {
  Mutation: {
    updateMe: async (
      parent: ResolversParentTypes,
      args: MutationUpdateMeArgs,
      { isAuthenticated }: Context,
    ): Promise<MutationResponse> => {
      const currentAccount = isAuthenticated();
      await prisma.account.update({
        data: {
          name: args.name ? args.name : undefined,
          thumbnail: args.thumbnail
            ? {
                upsert: {
                  create: {
                    ...args.thumbnail,
                  },
                  update: {
                    ...args.thumbnail,
                  },
                },
              }
            : undefined,
        },
        where: {
          id: currentAccount.id,
        },
      });

      return {
        ok: true,
        message: AccountResponse.UPDATE_ME_SUCCESS.Message,
      };
    },
  },
};
