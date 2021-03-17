/*
 * @Description: 发送请求
 * @Author: 惜纸
 * @Date: 2019-08-16 10:40:48
 * @LastEditTime: 2019-08-16 16:53:46
 * @LastEditors: Please set LastEditors
 */
import { BrigeRequestConfig, EbrigePromise } from './../types'
import brige from './brige'
function dispatchCommit(config: BrigeRequestConfig): EbrigePromise {
  processConfig(config)
  return brige(config)
}

function processConfig(config: BrigeRequestConfig): void {
  config.url = transformURL(config)
}

function transformURL(config: BrigeRequestConfig): string {
  const { schema, action, requestData } = config
  return `${schema}://${action}?data=${JSON.stringify(requestData)}&`
}

export default dispatchCommit
