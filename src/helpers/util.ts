/*
 * @Description: 帮助文件
 * @Author: 惜纸
 * @Date: 2019-08-16 17:24:54
 * @LastEditTime: 2019-08-16 17:25:04
 * @LastEditors: Please set LastEditors
 */
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function isFunction(val: any): val is Function {
  return toString.call(val) === '[object Function]'
}
export function isNull(val: any): Boolean {
  return toString.call(val) === '[object Null]'
}

export function createIframe(): HTMLIFrameElement {
  return document.createElement('iframe')
}
