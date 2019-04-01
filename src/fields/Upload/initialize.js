import Uppy from '@uppy/core'
import Tus from '@uppy/tus'

export default function initialize(config, endpoint) {
  const uppy = Uppy(config)
  uppy.use(Tus, { endpoint })
  return uppy
}
