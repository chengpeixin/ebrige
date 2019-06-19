import { brigeRequestConfig, eBrigePromise } from './../types'
import { enCodeRequestData } from './../helpers/data'
import { isFunction, isPlainObject } from './../helpers/util'
import brige from './brige'
function dispatchCommit(config: brigeRequestConfig): eBrigePromise {
  processConfig(config)
  return brige(config)
}

function processConfig(config: brigeRequestConfig): void {
  config.url = transformURL(config)
  config.data = transformData(config)
}

function transformURL(config: brigeRequestConfig): string {
  const { schema, action } = config
  return `${schema}${action}?`
}

function transformData({ data }: brigeRequestConfig): string {
  if (isFunction(data) && !isPlainObject(data)) data = {}
  return enCodeRequestData(data)
}

export default dispatchCommit
