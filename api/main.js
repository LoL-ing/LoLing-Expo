import axios from 'axios';
import { useRecoilState } from 'recoil';
import { profilesState } from '../atoms/atom';

const BASE_URL = 'http:/54.153.85.38';

export function api_getFriends() {
  return axios.get(BASE_URL + '/friends');
}

export function api_getProfiles() {
  return axios.get(BASE_URL + '/profiles');
}

export function test_profiles() {
  const response = api_getProfiles().then(response => response);
  const [_, setFriends] = useRecoilState(profilesState);
  setFriends(response);
}

export function api_getChampions() {
  return axios.get(BASE_URL + '/champions');
}
