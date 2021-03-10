import { EVENTTYPES } from './constant'

type ReplaceCallback = (data: any) => void

export interface ReplaceHandler {
  type: EVENTTYPES,
  callback:  ReplaceCallback
}

const handlers: { [key in EVENTTYPES]?: ReplaceCallback[] } = {}

export function subscribeEvent (handler: ReplaceHandler): void {
  if (!handler) return
  handlers[handler.type] = handlers[handler.type] || []
  handlers[handler.type].push(handler.callback)
}

export function triggerHandlers (type: EVENTTYPES, data: any): void {
  if (!type || !handlers[type]) return
  handlers[type].forEach((callback) =>{
    callback(data)
  })
}