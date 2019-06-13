import { brigeRequestConfig } from './../types'
import { enCodeRequestData } from './../helpers/data'
import { isFunction, isPlainObject } from './../helpers/util'
import brige from './brige'
function dispatchCommit(config: brigeRequestConfig) {
  processConfig(config)
  brige(config)
}

function processConfig(config: brigeRequestConfig) {
  config.url = transformURL(config)
  config.data = transformData(config)
}

function transformURL(config: brigeRequestConfig) {
  const { schema, action } = config
  return `${schema}/${action}?`
}

function transformData({ data }: brigeRequestConfig) {
  if (isFunction(data) && !isPlainObject(data)) data = {}
  return enCodeRequestData(data)
}

export default dispatchCommit
