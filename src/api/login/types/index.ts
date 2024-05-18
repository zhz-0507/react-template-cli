export interface LoginRequest {
  name: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  tel: string;
  name: string;
  password: string;
  token: string;
}
