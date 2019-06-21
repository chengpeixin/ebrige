export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function isFunction(val: any): val is Function {
  return toString.call(val) === '[object Function]'
}
export function createIframe(): HTMLIFrameElement {
  return document.createElement('iframe')
}
