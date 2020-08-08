import {
  MutationRegisterInfluencerArgs,
  MutationResponse,
  ResolversParentTypes,
  Role,
} from 'types/graphql';
import { prisma } from 'index';
import { Context } from 'types/type';
import { InfluencerResponse } from 'constants/response';

export default {
  Mutation: {
    registerInfluencer: async (
      parent: ResolversParentTypes,
      args: MutationRegisterInfluencerArgs,
      { isAuthorized }: Context,
    ): Promise<MutationResponse> => {
      isAuthorized(Role.Admin);
      const { platform, name, homepage, thumbnail } = args;

      await prisma.influencer.create({
        data: {
          platform,
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
      });

      return {
        ok: true,
        message: InfluencerResponse.CREATE_SUCCESS.Message,
      };
    },
  },
};
