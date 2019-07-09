import { BrigeRequestConfig, EbrigePromise, NativeResponse } from '../types'
import { createIframe, isFunction } from './../helpers/util'
import { medium, setMedium } from './../helpers/medium'
import CreateOb from './obser'

export default function brige({ url, data, cb, action }: BrigeRequestConfig): EbrigePromise {
  return new Promise((resolve: Function, reject: Function) => {
    const callId: any = action! + Date.now()
    const requestUrl: string = `${url}data=${data}&callId=${callId}`
    let medium: medium = createIframe()
    setMedium(medium, requestUrl)
    sendRequest(medium)
    const ob = new CreateOb(callId)
    console.log(requestUrl)
    ob.onResolved(({ status, data }: NativeResponse) => {
      if (isFunction(cb)) {
        cb(data)
      } else {
        if (status !== 1) {
          reject(status)
        }
        resolve(data)
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
