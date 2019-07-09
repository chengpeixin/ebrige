import { BrigeRequestConfig, EbrigePromise, callId } from './../types'
import dispatchCommit from './dispatchCommit'

class Ebrige {
  private defaults: BrigeRequestConfig
  constructor(initConfig: BrigeRequestConfig) {
    this.defaults = initConfig
  }

  public dispatch(action: string, data?: any, cb?: Function): EbrigePromise {
    return this.commit(action, data, cb)
  }

  private commit(action: string, data: object = {}, cb?: Function): EbrigePromise {
    this.defaults = Object.assign(this.defaults, {
      action,
      data,
      cb
    })
    return dispatchCommit(this.defaults)
  }

  public callSuccess(callId: callId, status = 1, data = {}, msg = '') {
    if ((window as any)[callId]) {
      Object.assign((window as any)[callId], {
        data,
        status,
        msg
      })
    }
    setTimeout(() => {
      delete (window as any)[callId]
    }, 2000)
  }
}

export default Ebrige
