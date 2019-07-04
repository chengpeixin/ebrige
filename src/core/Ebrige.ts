import { BrigeRequestConfig, EbrigePromise, callId, callData } from './../types'
// import { isPlainObject, isFunction } from './../helpers/util'
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
  /**
   *
   * @param callId 由原生传入的callId
   */
  public callSuccess(callId: callId, status = 1, data: callData) {
    if ((window as any).callId) {
      // tslint:disable-next-line: no-unexpected-multiline
      ;(window as any)[callId].data = data(window as any)[callId].status = status
      setTimeout(() => {
        delete (window as any).callId
      }, 1000)
    }
  }
}

export default Ebrige
