import axios from 'axios';
import { API_URL } from '../config';
import { useRecoilState } from 'recoil';
import { profilesState } from '../atoms/atom';
import baseAPI from './base.js';

export function api_getFriends() {
  return baseAPI.get('/friends/friends');
}

export function api_getProfiles() {
  return baseAPI.get('/profiles/profiles', { lol_name: '꼽 죽' });
}

export function api_getLoLAccount() {
  return baseAPI.get('/profiles/lol_account', {
    user_id: 'alsrb001218@naver.com',
  });
}

export function test_profiles() {
  const response = api_getProfiles().then(response => response);
  const [_, setFriends] = useRecoilState(profilesState);
  setFriends(response);
}

export function api_getChampions() {
  return baseAPI.get('/champions/champions');
}

export function api_getAccessToken(params) {
  return baseAPI.get('/users/sign_in', {
    email: params.email,
    password: params.password,
  });
}
