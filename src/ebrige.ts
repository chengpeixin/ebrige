import { brigeRequestConfig } from './types'
import Ebrige from './core/Ebrige'
import defaults from './defaults'
function createInstance(config: brigeRequestConfig) {
  const context = new Ebrige(config)
  return context
}

const ebrige = createInstance(defaults)

export default ebrige
