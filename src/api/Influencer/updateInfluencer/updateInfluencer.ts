import {
  MutationResponse,
  MutationUpdateInfluencerArgs,
  ResolversParentTypes,
  Role,
} from 'types/graphql';
import { prisma } from 'index';
import { Context } from 'types/type';
import { InfluencerResponse } from 'constants/response';

export default {
  Mutation: {
    updateInfluencer: async (
      parent: ResolversParentTypes,
      args: MutationUpdateInfluencerArgs,
      { isAuthorized }: Context,
    ): Promise<MutationResponse> => {
      isAuthorized(Role.Manager);
      const { id, name, homepage, thumbnail } = args;

      await prisma.influencer.update({
        data: {
          name,
          homepage,
          thumbnail: thumbnail
            ? {
                create: {
                  url: thumbnail.url,
                  originalName: thumbnail.originalName,
                  size: thumbnail.size,
                },
              }
            : undefined,
        },
        where: {
          id,
        },
      });

      return {
        ok: true,
        message: InfluencerResponse.UPDATE_SUCCESS.Message,
      };
    },
  },
};
