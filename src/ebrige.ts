import { BrigeRequestConfig } from './types'
import Ebrige from './core/Ebrige'
import defaults from './defaults'
function createInstance(config: BrigeRequestConfig) {
  const context = new Ebrige(config)
  return context
}

const ebrige = createInstance(defaults)

export default ebrige
