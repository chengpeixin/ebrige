/*
 * @Description: 处理数据
 * @Author: 惜纸
 * @Date: 2019-08-16 15:32:49
 * @LastEditTime: 2019-08-16 17:20:51
 * @LastEditors: Please set LastEditors
 */
import { dataContext } from './../types/index'

export function getDate(): Date {
  return new Date()
}

export const defaultObParams: dataContext = {
  request: {
    requestData: Object.create(null),
    requestTime: getDate()
  },
  response: {
    responseData: Object.create(null),
    responseTime: getDate()
  },
  failed: {
    failedInfo: {},
    failedTime: null
  }
}

export const callComeHandle = (callId: string, data: any): void => {
  if ((window as any)[callId]) {
    Object.assign((window as any)[callId], data)
  }
  setTimeout(() => {
    delete (window as any)[callId]
  }, 2000)
}
