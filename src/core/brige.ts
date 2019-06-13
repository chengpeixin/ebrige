import { brigeRequestConfig } from '../types'
import { createIframe } from './../helpers/util'
import { medium, setMedium } from './../helpers/medium'
declare const window: Window & { [callbackName: string]: Function }

export default function brige({ url, data, cb, action }: brigeRequestConfig) {
  // return new Promise((resolve) => {
  const callbackName: any = action! + Date.now()
  const requestUrl = `${url}data=${data}&cb=${callbackName}`
  let medium: medium = createIframe()
  setMedium(medium, requestUrl)
  sendRequest(medium)
  window[callbackName] = cb!
  setTimeout(() => {
    document.body.removeChild(medium)
    medium = null!
  })
  setTimeout(() => {
    window[callbackName]()
  }, 5000)
  // })
}

function sendRequest(medium: medium) {
  const body: HTMLElement = document.body
  body.appendChild(medium)
}
