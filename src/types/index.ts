export interface BrigeRequestConfig {
  schema?: string
  data?: any
  url?: string
  timeout?: number
  complete?: string
  cb?: Function
  action?: string
  request?: string
}

export interface EbrigePromise<T = any> extends Promise<EbrigePromise<T>> {}

export type callId = string

export interface ObParams {
  status: number
  data: object | null
  callId: callId
}
