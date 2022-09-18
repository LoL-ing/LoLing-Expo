import axios from 'axios';
import { API_URL } from '../config';
import { useRecoilState } from 'recoil';
import { profilesState } from '../atoms/atom';
import baseAPI from './base.js';
import { accessTokenState } from '../atoms/atom';
import { useRecoilValue } from 'recoil';

export function apiGetFriends() {
  return baseAPI.get('/friends/friends');
}

export function apiGetProfile() {
  return baseAPI.get('/profiles');
}

export function apiGetProfiles() {
  return baseAPI.get('users/friends/profiles');
}

export function apiGetLoLAccount() {
  return baseAPI.get('/profiles/lol_account', {
    user_id: '1234',
  });
}

export function test_profiles() {
  const response = apiGetProfiles().then(response => response);
  const [_, setFriends] = useRecoilState(profilesState);
  setFriends(response);
}

export function apiGetChampions() {
  return baseAPI.get('/champions/champions');
}

export function apiGetAccessToken(params) {
  return baseAPI.get('/users/sign_in', {
    email: params.email,
    password: params.password,
  });
}

export function api_getFriendProfiles(){
  return baseAPI.get('/users/friend_profiles');
}
