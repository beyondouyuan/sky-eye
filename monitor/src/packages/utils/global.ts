import { EVENTTYPES } from '../shared/constant'
import { variableTypeDictionary } from './is'

// 全局变量
export interface SKYMonitorSupport {
  logger: any,
  replaceFlag: { [key in EVENTTYPES]?: boolean }
}

interface SKYMONITORGLOBAL {
  console?: Console
  __SKYMONITOR__: SKYMonitorSupport
}

export const isNodeEnv = variableTypeDictionary.isProcess(typeof process !== 'undefined' ? process : 0)

export const isBrowserEnv = variableTypeDictionary.isWindow(typeof window !== 'undefined' ? window : 0)

/**
 * 获取全局变量
 */
export function getGlobal<T>() {
  if (isBrowserEnv) return (window as unknown) as SKYMONITORGLOBAL & T
  if (isNodeEnv) return (process as unknown) as SKYMONITORGLOBAL & T
}

const _global = getGlobal<Window>()
const _support = getGlobalSKYMonitorSupport()

export { _global, _support }

_support.replaceFlag = _support.replaceFlag || {}
const replaceFlag = _support.replaceFlag

export function setFlag (replaceType: EVENTTYPES, isSet: boolean): void {
  if (replaceFlag[replaceType]) return
  replaceFlag[replaceType] = isSet
}

export function getFlag (replacetype: EVENTTYPES): boolean {
  return  replaceFlag[replacetype]
}

export function getGlobalSKYMonitorSupport (): SKYMonitorSupport {
  _global.__SKYMONITOR__ = _global.__SKYMONITOR__ || ({} as SKYMonitorSupport)
  return _global.__SKYMONITOR__
}

export function supportHistory (): boolean {
  const chrome = (_global as any).chrome
  const isChromePackagedApp = chrome && chrome.app && chrome.app.runtime
  const hasHistoryApi = 'history' in _global && !!_global.history.pushState && !!_global.history.replaceState

  return !isChromePackagedApp && hasHistoryApi
}