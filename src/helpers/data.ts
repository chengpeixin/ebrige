import { isPlainObject } from './util'
export function enCodeRequestData(data: any) {
  // data = JSON.stringify(data)
  return window.btoa(encodeURIComponent(JSON.stringify(data)))

  // return window.btoa(data)
}

export function deCodeRequestData(base64: string) {
  return window.atob(base64)
}
