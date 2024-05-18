import request from '../request';
import {
  LoginRequest,
  LoginResponse
} from './types'

export const API = {
  login: '/api/login',
};
export function postlogin(data: LoginRequest) {
  return request<LoginResponse>({
    url: `${API.login}`,
    params: data
  });
}

