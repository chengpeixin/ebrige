import { isPlainObject } from './util'
export function enCodeRequestData(data: any) {
  return window.btoa(data)
}

export function deCodeRequestData() {}
