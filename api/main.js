import axios from 'axios';

export function api_getFriends() {
  return axios.get('http:/54.153.85.38/Friends');
}

export function api_getProfiles() {
  return axios.get('http:/54.153.85.38/Profiles');
}

export function api_getChampions() {
  return axios.get('http:/54.153.85.38/Champions');
}
