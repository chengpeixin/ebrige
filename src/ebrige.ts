/*
 * @Description: 工厂文件
 * @Author: 惜纸
 * @Date: 2019-08-16 17:10:29
 * @LastEditTime: 2019-08-16 17:14:53
 * @LastEditors: Please set LastEditors
 */
import { BrigeRequestConfig } from './types'
import Ebrige from './core/Ebrige'
import defaults from './defaults'
const globName = '$ebrige'
function createInstance(config: BrigeRequestConfig) {
  const context = new Ebrige(config)
  return context
}
console.log(Ebrige)
const ebrige = createInstance(defaults)
;(window as any)[globName] = ebrige

export default ebrige
