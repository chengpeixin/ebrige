import { brigeRequestConfig } from './../types'
// import { isPlainObject, isFunction } from './../helpers/util'
import dispatchCommit from './dispatchCommit'
class Ebrige {
  private defaults: brigeRequestConfig
  constructor(initConfig: brigeRequestConfig) {
    this.defaults = initConfig
  }

  public dispatch(action: string, data?: any, cb?: Function) {
    return this.commit(action, data, cb)
  }

  public resolved(cbName: string) {}

  private commit(action: string, data: object = {}, cb?: Function): void {
    this.defaults = Object.assign(this.defaults, {
      action,
      data,
      cb
    })
    dispatchCommit(this.defaults)
  }
}

export default Ebrige
