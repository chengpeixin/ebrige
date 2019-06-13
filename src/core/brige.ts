import { brigeRequestConfig, eBrigePromise, obParams } from '../types'
import { createIframe, isFunction } from './../helpers/util'
import { medium, setMedium } from './../helpers/medium'
import createOb from './obser'

declare const window: Window & { [callbackName: string]: Function }

export default function brige({ url, data, cb, action }: brigeRequestConfig): eBrigePromise {
  return new Promise((resolve: Function, reject: Function) => {
    const callbackName: any = action! + Date.now()
    const requestUrl = `${url}data=${data}&callId=${callbackName}`
    let medium: medium = createIframe()
    setMedium(medium, requestUrl)
    sendRequest(medium)
    console.log(requestUrl)
    const ob = new createOb(callbackName)
    ob.onResolved((brigeData: obParams) => {
      const responseData: object | null = brigeData.data
      if (isFunction(cb)) {
        cb(responseData)
      } else {
        if (brigeData.status !== 1) reject(brigeData.status)
        resolve(responseData)
      }
    })

    setTimeout(() => {
      document.body.removeChild(medium)
      medium = null!
    })
    setTimeout(() => {
      ;(window as any)[callbackName]['status'] = 2
    }, 5000)
  })
}

function sendRequest(medium: medium) {
  const body: HTMLElement = document.body
  body.appendChild(medium)
}
