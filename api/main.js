import axios from 'axios';
import { useRecoilState } from 'recoil';
import { profilesState } from '../atoms/atom';

export function api_getFriends() {
  return axios.get('http:/54.153.85.38/friends');
}

export function api_getProfiles() {
  return axios.get('http:/54.153.85.38/profiles');
}

export function test_profiles() {
  console.log(14);
  const response = api_getProfiles().then(response => response);
  console.log(response);
  const [_, setFriends] = useRecoilState(profilesState);
  setFriends(response);
}

export function api_getChampions() {
  return axios.get('http:/54.153.85.38/champions');
}
