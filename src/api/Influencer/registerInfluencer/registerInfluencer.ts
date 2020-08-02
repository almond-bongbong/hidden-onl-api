import {
  MutationRegisterInfluencerArgs,
  ResolversParentTypes,
  MutationResponse,
} from 'types/graphql';
import { prisma } from 'index';

export default {
  Mutation: {
    registerInfluencer: async (
      parent: ResolversParentTypes,
      args: MutationRegisterInfluencerArgs
    ): Promise<MutationResponse> => {
      const { platform, name, homepage, thumbnail } = args;

      await prisma.influencer.create({
        data: {
          platform,
          name,
          homepage,
          thumbnail: thumbnail && {
            create: {
              url: thumbnail.url,
              originalName: thumbnail.originalName,
              size: thumbnail.size,
            },
          },
        },
      });

      return {
        ok: true,
        message: 'Success create influencer',
      };
    },
  },
};
