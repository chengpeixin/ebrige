import { BrigeRequestConfig, EbrigePromise } from './../types'
import { enCodeRequestData } from './../helpers/data'
import { isFunction, isPlainObject } from './../helpers/util'
import brige from './brige'
function dispatchCommit(config: BrigeRequestConfig): EbrigePromise {
  processConfig(config)
  return brige(config)
}

function processConfig(config: BrigeRequestConfig): void {
  config.url = transformURL(config)
  config.data = transformData(config)
}

function transformURL(config: BrigeRequestConfig): string {
  const { schema, action } = config
  return `${schema}://${action}?`
}

function transformData({ data }: BrigeRequestConfig): string {
  if (isFunction(data) && !isPlainObject(data)) data = {}
  return enCodeRequestData(data)
}

export default dispatchCommit
