import { brigeRequestConfig, eBrigePromise, obParams } from '../types'
import { createIframe, isFunction } from './../helpers/util'
import { medium, setMedium } from './../helpers/medium'
import createOb from './obser'

declare const window: Window & { [callId: string]: Function }

export default function brige({ url, data, cb, action }: brigeRequestConfig): eBrigePromise {
  return new Promise((resolve: Function, reject: Function) => {
    const callId: any = action! + Date.now()
    const requestUrl: string = `${url}data=${data}&callId=${callId}`
    let medium: medium = createIframe()
    setMedium(medium, requestUrl)
    sendRequest(medium)
    const ob = new createOb(callId)
    console.log(requestUrl)
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
  })
}

function sendRequest(medium: medium): void {
  const body: HTMLElement = document.body
  body.appendChild(medium)
}
