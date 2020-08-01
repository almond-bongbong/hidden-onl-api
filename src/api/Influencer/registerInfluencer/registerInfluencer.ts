import {
  MutationRegisterInfluencerArgs,
  ResolversParentTypes,
} from '../../../types/graphql';

export default {
  Mutation: {
    registerInfluencer: async (
      parent: ResolversParentTypes,
      args: MutationRegisterInfluencerArgs
    ): Promise<void> => {
      const { platform, name, homepage, thumbnail } = args;
      console.log('platform', platform);
      console.log('name', name);
      console.log('homepage', homepage);
      console.log('thumbnail', thumbnail);
      // const post = await prisma.createPost({
      //   caption,
      //   location,
      //   user: { connect: { id: user.id } },
      // });
      //
      // const fileFetches = files.map((f) =>
      //   prisma.createFile({ url: f, post: { connect: { id: post.id } } })
      // );
      // await Promise.all(fileFetches);
      //
      // return post;
    },
  },
};
