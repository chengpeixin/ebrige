/*
 * @Description: 类型定义
 * @Author: 惜纸
 * @Date: 2019-08-16 11:26:25
 * @LastEditTime: 2019-08-16 17:21:01
 * @LastEditors: Please set LastEditors
 */
export interface BrigeRequestConfig {
  schema?: string
  requestData?: RequestData
  url?: string
  timeout?: number
  complete?: string
  cb?: Function
  action?: string
  request?: string
  responseData?: ResponseData
}

export interface EbrigePromise<T = any> extends Promise<EbrigePromise<T>> {}

export type callId = string

export type callData = any

export interface Request {
  requestData: RequestData
  requestTime: Date
}
export interface Response {
  responseData: ResponseData
  responseTime: Date
}

export interface Failed {
  failedInfo: FailedInfo
  failedTime: Date | null
}
export type ResponseData = object
export type RequestData = object
export type FailedInfo = object
export interface dataContext {
  request: Request
  response: Response
  failed: Failed
}
