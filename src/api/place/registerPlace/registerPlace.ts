import { MutationRegisterPlaceArgs, MutationResponse, ResolversParentTypes } from 'types/graphql';
import { prisma } from 'index';
import { Context } from 'types/type';
import { PlaceResponse } from 'constants/response';

export default {
  Mutation: {
    registerPlace: async (
      parent: ResolversParentTypes,
      args: MutationRegisterPlaceArgs,
      { isAuthenticated }: Context,
    ): Promise<MutationResponse> => {
      const currentUser = isAuthenticated();
      await prisma.place.create({
        data: {
          name: args.name,
          longitude: args.location.longitude,
          latitude: args.location.latitude,
          zipcode: args.location.zipcode,
          address: args.location.address,
          addressDetail: args.location.addressDetail,
          influencer: {
            connect: {
              id: args.influencerId,
            },
          },
          createdBy: {
            connect: {
              id: currentUser.id,
            },
          },
        },
      });
      return {
        ok: true,
        message: PlaceResponse.CREATE_SUCCESS.Message,
      };
    },
  },
};
