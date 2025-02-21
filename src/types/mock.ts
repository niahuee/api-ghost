export enum HttpMethod {
  GET = "Get",
  POST = "Post",
  PATCH = "Patch",
  PUT = "Put",
  DELETE = "Delete",
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

