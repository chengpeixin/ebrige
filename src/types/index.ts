export interface brigeRequestConfig {
  schema?: string
  data?: any
  url?: string
  timeout?: number
  complete?: string
  cb?: Function
  action?: string
  request?: string
}

export interface eBrigePromise<T = any> extends Promise<eBrigePromise<T>> {}

export type callId = string

export interface obParams {
  status: number
  data: object | null
  callId: callId
}
