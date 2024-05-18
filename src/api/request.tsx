import axios from 'axios';
import axiosRetry from 'axios-retry';
import { InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const whiteRetryCodes = ['ECONNABORTED', 0];

// 创建axios请求实例
const defaultConfig = {
  baseURL: '', // 接口请求地址
  timeout: 15 * 1000, // 请求超时设置
  withCredentials: false, // 跨域请求是否需要携带cookie
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
};

const serviceAxios = axios.create(defaultConfig);

axiosRetry(serviceAxios, {
  retries: 2, // 重复请求次数
  shouldResetTimeout: true, // 重置超时时间
  retryDelay: (retryCount) => retryCount * 10000, // 重复请求延迟
  retryCondition: (err) => {
    const { code, message } = err;

    if (code === undefined && message.includes('timeout')) {
      return true;
    }

    return whiteRetryCodes.includes(code as string);
  },
});

// 请求和响应拦截器日志辅助函数
function logInterceptor(isRequest: boolean, status: string, err?: AxiosError) {
  console.log(`全局${isRequest ? '请求' : '响应'}拦截器: ${status}`);
  if (err) {
    console.error(err);
  }
}

// 请求拦截器
serviceAxios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    logInterceptor(true, '成功');
    return config;
  },
  (err: AxiosError) => {
    logInterceptor(true, '处理请求错误', err);
    return Promise.reject(err);
  },
);

// 响应拦截器
serviceAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    logInterceptor(false, '成功');
    return response;
  },
  (err: AxiosError) => {
    logInterceptor(false, '处理响应错误', err);
    return Promise.reject(err);
  },
);

// 统一发起请求的函数
function requestWrapper<T>(config: AxiosRequestConfig): Promise<T> {
  return serviceAxios(config);
}

export default requestWrapper;

