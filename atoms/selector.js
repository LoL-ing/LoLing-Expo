/* eslint-disable no-useless-catch */
// refresh 참고 : https://skyblue300a.tistory.com/10

import axios from 'axios';
import { selector } from 'recoil';
// import { api_getFriends, api_getProfiles } from '../api/main';
import { friendsState } from './atom';
import { lol_accountState } from './atom';

export const getFriendsSelector = selector({
  key: `friends/get`,
  get: async ({ get }) => {
    const { data } = await axios.get('http:/54.153.85.38/profiles');
    console.log(data);
    return data;
  },
  set: ({ set }, newValue) => {
    set(friendsState, newValue);
  },
});

export const getLoLAccountSelector = selector({
  key: `lol_account/get`,
  get: async ({ get }) => {
    const { data } = await axios.get('http:/54.153.85.38/lol_account');
    console.log(data);
    return data;
  },
});
