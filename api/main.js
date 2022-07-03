import axios from 'axios';

export function api_getFriends() {
  return axios.get('http:/172.30.1.49:8000/Friends');
}

export function api_getProfiles() {
  return axios.get('http:/172.30.1.49:8000/Profiles');
}

export function api_getChampions() {
  return axios.get('http:/172.30.1.49:8000/Champions');
}
