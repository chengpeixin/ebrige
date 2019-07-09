import { BrigeRequestConfig } from './types'
import Ebrige from './core/Ebrige'
import defaults from './defaults'
const globName = '$ebrige'
function createInstance(config: BrigeRequestConfig) {
  const context = new Ebrige(config)
  return context
}

const ebrige = createInstance(defaults)
;(window as any)[globName] = ebrige
export default ebrige
