export interface XhrRequestConfig {
  url: string;
  method?: string;
  body?: any;
  baseURL?: string;
  headers?: Object;
}

export interface XhrResponse<T=any> {
  data: T;
  request: XhrRequestConfig;
  headers: Object;
}