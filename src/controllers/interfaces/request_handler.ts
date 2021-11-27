import { Response as ExpressResponse, Request as ExpressRequest } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

export type Response<ResponseBody = unknown> = ExpressResponse<ResponseBody>;

export type Request<
  RequestBody = unknown,
  ResponseBody = unknown,
  Params = ParamsDictionary
> = ExpressRequest<Params, ResponseBody, RequestBody>;
