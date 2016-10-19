import request from '../utils/request';

export async function getSleepData() {
  return request('/api/sleep/data');
}
