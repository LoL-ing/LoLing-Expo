import { atom } from 'recoil';

export const friendsState = atom({
  key: 'friendsState',
  default: [],
});

export const profilesState = atom({
  key: 'profilesState',
  default: [],
});

export const championsState = atom({
  key: 'championsState',
  default: [],
});
