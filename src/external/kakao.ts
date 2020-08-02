import axios, { AxiosPromise } from 'axios';

const HOST = 'https://kapi.kakao.com';

export const getUser = (accessToken: string): AxiosPromise =>
  axios.post(`${HOST}/v2/user/me`, null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
