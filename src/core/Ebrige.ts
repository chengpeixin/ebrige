import { brigeRequestConfig, eBrigePromise } from './../types'
// import { isPlainObject, isFunction } from './../helpers/util'
import dispatchCommit from './dispatchCommit'
class Ebrige {
  private defaults: brigeRequestConfig
  constructor(initConfig: brigeRequestConfig) {
    this.defaults = initConfig
  }

  public dispatch(action: string, data?: any, cb?: Function): eBrigePromise {
    return this.commit(action, data, cb)
  }

  private commit(action: string, data: object = {}, cb?: Function): eBrigePromise {
    this.defaults = Object.assign(this.defaults, {
      action,
      data,
      cb
    })
    return dispatchCommit(this.defaults)
  }
}

export default Ebrige
