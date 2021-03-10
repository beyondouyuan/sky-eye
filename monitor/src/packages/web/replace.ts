import { EVENTTYPES } from '../shared/constant'
import { _global, on } from '../utils'

function replace (type: EVENTTYPES) {
  switch (type) {
    case EVENTTYPES.XHR:
      xhrReplace()
      break
    default:
      break
  }
}

export function addReplaceHandler (handler: any) {
  replace(handler.type)
}

function xhrReplace (): void {
    if (!('XMLHttpRequest' in window)) return
}