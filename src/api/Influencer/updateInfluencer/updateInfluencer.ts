import {
  MutationUpdateInfluencerArgs,
  ResolversParentTypes,
  Response,
} from '../../../types/graphql';
import { prisma } from '../../../index';

export default {
  Mutation: {
    updateInfluencer: async (
      parent: ResolversParentTypes,
      args: MutationUpdateInfluencerArgs
    ): Promise<Response> => {
      const { id, name, homepage, thumbnail } = args;

      await prisma.influencer.update({
        data: {
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
        where: {
          id,
        },
      });

      return {
        ok: true,
        message: 'Success update influencer',
      };
    },
  },
};
