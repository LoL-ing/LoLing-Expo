/* eslint-disable no-useless-catch */
import axios from 'axios';
import { selector } from 'recoil';
import { api_getFriends } from '../api/main';
import { friendsState } from './atom';

export const getFriendsSelector = selector({
  key: `friends/get`,
  get: async ({ get }) => {
    const { data } = await axios.get('http:/54.153.85.38/Friends');
    console.log('response@@@@@@@@@@@@@@@@@@\n\n\n');
    return data.result;
  },
  set: ({ set }, newValue) => {
    set(friendsState, newValue);
  },
});
