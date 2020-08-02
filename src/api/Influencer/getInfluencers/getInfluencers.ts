import { prisma } from '../../../index';

export default {
  Query: {
    getInfluencers: () =>
      prisma.influencer.findMany({
        include: {
          thumbnail: true,
        },
      }),
  },
};
