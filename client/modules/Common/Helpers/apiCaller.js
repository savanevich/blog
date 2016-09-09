import axios from 'axios';
import Config from './../../../../server/config';

export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
  process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) :
  '/api';

export default function callApi(endpoint, method = 'get', body) {
  return axios({
    method,
    headers: { 'content-type': 'application/json' },
    url: `${API_URL}/${endpoint}`,
    data: JSON.stringify(body)
  });
}
