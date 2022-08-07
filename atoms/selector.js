/* eslint-disable no-useless-catch */
// refresh 참고 : https://skyblue300a.tistory.com/10

import axios from 'axios';
import { selector, selectorFamily } from 'recoil';
import {
  api_getChampions,
  api_getProfiles,
  api_getLoLAccount,
  api_getAccessToken,
} from '../api/main';
import { friendsState } from './atom';
import { lol_accountState } from './atom';
import { accessTokenState } from './atom';

export const getFriendsSelector = selector({
  key: `friends/get`,
  get: async ({ get }) => {
    const { data } = await api_getProfiles();
    return data;
  },
  set: ({ set }, newValue) => {
    set(friendsState, newValue);
  },
});

export const getChampionsSelector = selector({
  key: `champions/get`,
  get: async ({ get }) => {
    const { data } = await api_getChampions();
    return data;
  },
  set: ({ set }, newValue) => {
    set(friendsState, newValue);
  },
});

export const getLoLAccountSelector = selector({
  key: `lol_account/get`,
  get: async ({ get }) => {
    const { data } = await api_getLoLAccount();
    return data;
  },
});

export const getAccessTokenSelector = selectorFamily({
  key: `sign_in/get`,
  get:
    (email, password) =>
    async ({ get }) => {
      const { data } = await api_getAccessToken({ email, password });
      return data;
    },
  set: ({ set }, newValue) => {
    set(accessTokenState, newValue);
  },
});
