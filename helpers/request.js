var superagent = require('superagent-promise')(require('superagent'), Promise);
import { config } from './config';

export function get(url) {
  const request = superagent.get(`${config.baseURL}${url}`)
    .set('Accept', 'application/json');

  if (__SERVER__ && this && this.get('cookie')) {
    request.set('cookie', this.get('cookie'));
  }

  return request.end();
}

export function post(url, data) {
  const request = superagent.post(`${config.baseURL}${url}`)
    .set('Accept', 'application/json');

  if (data) {
    request.send(data);
  }

  return request.end();
}
