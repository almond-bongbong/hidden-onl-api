import {
  LoginPlatform,
  LoginReponse,
  MutationLoginArgs,
  ResolversParentTypes,
} from 'types/graphql';
import * as kakaoApi from 'external/kakao';
import { prisma } from 'index';
import { createJWT } from 'libs/jwt';
import { AccountResponse } from 'constants/response';
import { createSentence } from 'libs/nicknameGenerator';

const findAccount = async (platform: LoginPlatform, platformId: string) => {
  const accounts = await prisma.account.findMany({
    where: {
      platform,
      platformId,
    },
  });

  return accounts.length > 0 ? accounts[0] : null;
};

export default {
  Mutation: {
    login: async (parent: ResolversParentTypes, args: MutationLoginArgs): Promise<LoginReponse> => {
      const { platform, accessToken } = args;

      try {
        if (platform === LoginPlatform.Kakao) {
          const { data } = await kakaoApi.getUser(accessToken);
          const kakaoId = data.id.toString();
          const kakaoAccount = data.kakao_account;
          let account = await findAccount(platform, kakaoId);

          if (!account) {
            account = await prisma.account.create({
              data: {
                platform,
                platformId: kakaoId,
                email: kakaoAccount.email,
                name: kakaoAccount.profile?.nickname || createSentence(),
                thumbnail: kakaoAccount.profile?.thumbnail_image_url && {
                  create: {
                    url: kakaoAccount.profile?.thumbnail_image_url,
                    originalName: `${kakaoId}_thumbnail.jpg`,
                  },
                },
              },
            });
          }

          const token = createJWT({
            id: account.id,
            name: account.name,
            role: account.role,
          });

          return {
            ok: true,
            message: AccountResponse.LOGIN_SUCCESS.Message,
            token,
          };
        }
      } catch (e) {
        console.error(e);
      }

      return {
        ok: false,
        code: AccountResponse.INVALID_SOCIAL_TOKEN.Code,
        message: AccountResponse.INVALID_SOCIAL_TOKEN.Message,
      };
    },
  },
};
