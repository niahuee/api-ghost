export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

export type ResponseType = "json";

export interface MockResponse {
  type: ResponseType;
  body: string;
}

export interface HttpConfig {
  method: HttpMethod;
  code: number;
}

export interface Mock {
  id: string;
  name: string;
  url: string;
  http: HttpConfig;
  delay: number;
  isActive: boolean;
  group: string;
  response: MockResponse;
}

