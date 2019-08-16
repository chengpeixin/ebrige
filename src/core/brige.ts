/*
 * @Description: 发送请求
 * @Author: 惜纸
 * @Date: 2019-08-16 11:13:36
 * @LastEditTime: 2019-08-16 17:38:01
 * @LastEditors: Please set LastEditors
 */
import { BrigeRequestConfig, EbrigePromise, dataContext } from '../types'
import { createIframe, isFunction } from './../helpers/util'
import { medium, setMedium } from './../helpers/medium'
import CreateOb from './obser'
import { isNull } from './../helpers/util'

export default function brige({ url, requestData, cb, action }: BrigeRequestConfig): EbrigePromise {
  return new Promise((resolve: Function, reject: Function) => {
    const callId: any = action! + Date.now()
    console.log(callId)
    const requestUrl: string = `${url}callId=${callId}`
    let medium: medium = createIframe()
    setMedium(medium, requestUrl)
    sendRequest(medium)
    const ob = new CreateOb(callId, requestData as object)
    ob.onRechanged(({ response, failed }: dataContext) => {
      if (isFunction(cb)) {
        cb(response)
      } else {
        if (isNull(failed.failedTime)) {
          resolve(response)
        } else {
          reject(failed)
        }
      }
    })

    setTimeout(() => {
      document.body.removeChild(medium)
      medium = null!
    })
  })
}

function sendRequest(medium: medium): void {
  const body: HTMLElement = document.body
  body.appendChild(medium)
}
