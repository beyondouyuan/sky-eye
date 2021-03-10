import { EVENTTYPES } from '../shared/constant'

function replace (type: EVENTTYPES) {
  switch (type) {
    case EVENTTYPES.XHR:
      xhrReplace()
      break
    default:
      break
  }
}

export function addReplaceHandler (hanler: any) {
  replace(hanler.type)
}

function xhrReplace (): void {
    if (!('XMLHttpRequest' in window)) return
}