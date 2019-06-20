import { isFunction } from './../helpers/util'
import { callId, ObParams } from './../types'

export default class CreateOb {
  private cb!: Function
  private defaultObParams!: ObParams
  constructor(callId: callId) {
    this.initObData(callId)
    this.observe(callId)
  }

  private initObData(callId: callId): void {
    this.defaultObParams = {
      status: 0,
      data: null,
      callId: callId
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
          ;(defaultObParams as any)[key] = newVal
          if (key !== 'status') return
          if (isFunction(this.cb)) this.cb(defaultObParams, key, newVal)
        },
        enumerable: true,
        configurable: true
      })
    }
  }

  public onResolved(cb: Function): void {
    this.cb = cb
  }
}
