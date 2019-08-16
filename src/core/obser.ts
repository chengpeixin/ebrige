/*
 * @Description: 提供一个经过观察的对象
 * @Author: 惜纸
 * @Date: 2019-08-16 11:37:42
 * @LastEditTime: 2019-08-16 17:37:56
 * @LastEditors: Please set LastEditors
 */
import { isFunction } from './../helpers/util'
import { callId, RequestData, dataContext } from './../types'
import { defaultObParams, getDate } from './../helpers/data'
export default class CreateOb {
  private cb!: Function
  private defaultObParams!: dataContext
  constructor(callId: callId, requestData: RequestData) {
    this.initObData(callId, requestData)
    this.observe(callId)
  }

  private initObData(callId: callId, requestData: RequestData): void {
    this.defaultObParams = {
      ...defaultObParams,
      request: {
        requestData: requestData,
        requestTime: getDate()
      }
    }
    ;(window as any)[callId] = Object.create(null)
  }
  private observe(callId: callId): void {
    const { defaultObParams } = this
    const obData: object = (window as any)[callId]
    for (let key in this.defaultObParams) {
      Object.defineProperty(obData, key, {
        get() {
          return (defaultObParams as any)[key]
        },
        set: newVal => {
          if (key === 'request') return
          ;(defaultObParams as any)[key] = newVal
          if (isFunction(this.cb)) {
            this.cb(defaultObParams, key, newVal)
          }
        },
        enumerable: true,
        configurable: true
      })
    }
  }

  public onRechanged(cb: Function): void {
    this.cb = cb
  }
}
