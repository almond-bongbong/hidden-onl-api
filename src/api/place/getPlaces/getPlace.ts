import { QueryGetPlacesArgs, ResolversParentTypes } from 'types/graphql';
import { prisma } from 'index';

export default {
  Query: {
    getPlaces: async (parent: ResolversParentTypes, args: QueryGetPlacesArgs) =>
      prisma.place.findMany({
        include: {
          influencer: {
            include: {
              thumbnail: true,
            },
          },
        },
        where: {
          AND: {
            latitude: {
              gte: args.leftBottom.latitude,
              lte: args.rightTop.latitude,
            },
            longitude: {
              gte: args.leftBottom.longitude,
              lte: args.rightTop.longitude,
            },
          },
        },
      }),
  },
};
