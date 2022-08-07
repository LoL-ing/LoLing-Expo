import axios from 'axios';
import { API_URL } from '../config';
import qs from 'qs';

/* axios 공통 config */
export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { 'Cache-Control': 'no-cache' },
});

/* baseAPI 정의 */
const baseAPI = {
  get: (url, params, forceUpdate = false, arrayFormat = 'repeat', config) =>
    axiosInstance.get(url, {
      forceUpdate,
      params,

      // [1,2,3] 형태의 배열을 "1,2,3" 형태로 stringify한 후 전송
      paramsSerializer: params => qs.stringify(params, { arrayFormat }),
      ...config,
    }),
  post: (url, data, config) => axiosInstance.post(url, data, config),
  put: (url, data, config) => axiosInstance.put(url, data, config),
  delete: (url, params) => axiosInstance.delete(url, { data: { ...params } }),
};
export default baseAPI;
