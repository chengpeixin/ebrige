/*
 * @Description: 核心类
 * @Author: 惜纸
 * @Date: 2019-08-16 10:47:16
 * @LastEditTime: 2019-08-16 17:15:23
 * @LastEditors: Please set LastEditors
 */
import { BrigeRequestConfig, EbrigePromise, callId, RequestData, FailedInfo } from './../types'
import dispatchCommit from './dispatchCommit'
import { getDate, callComeHandle } from './../helpers/data'
class Ebrige {
  private defaults: BrigeRequestConfig
  constructor(initConfig: BrigeRequestConfig) {
    this.defaults = initConfig
  }

  public dispatch(action: string, requestData?: RequestData, cb?: Function): EbrigePromise {
    return this.commit(action, requestData, cb)
  }

  private commit(action: string, requestData: object = {}, cb?: Function): EbrigePromise {
    this.defaults = Object.assign(this.defaults, {
      action,
      requestData,
      cb
    })
    return dispatchCommit(this.defaults)
  }

  public getRequestData(callId: callId) {
    const request: BrigeRequestConfig = (window as any)[callId]
    return request ? request.requestData : {}
  }

  public callSuccess(callId: callId, responseData = {}) {
    callComeHandle(callId, {
      response: {
        responseData: responseData,
        responseTime: getDate()
      }
    })
  }
  public callFail(callId: callId, failedInfo: FailedInfo) {
    callComeHandle(callId, {
      failed: {
        failedInfo: failedInfo,
        failedTime: getDate()
      }
    })
  }
}

export default Ebrige
