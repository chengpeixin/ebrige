import { BrigeRequestConfig, EbrigePromise } from './../types'
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
}

export default Ebrige
