import { IAnyObject, IntegrationError } from '../types/common'
import { GLOBAL_CONSTANT, HTTPCODE, ERRORTYPES } from '../common/constant'

import { nativeToString, variableTypeDictionary } from './is'

export function geLocationHref(): string {
  if (typeof document === 'undefined' || document.location === null) return ''
  return document.location.href
}

type TotalEventName = keyof GlobalEventHandlersEventMap | keyof XMLHttpRequestEventTargetEventMap | keyof WindowEventMap

export function on(target: { addeventListener: Function }, eventname: TotalEventName, handler: Function, options: boolean
  | unknown = false): void {
  target.addeventListener(eventname, handler, options)
}

export function replaceOld (source:  IAnyObject, prop: string, replacement: (...args: any[]) => any, isForced = false): void {
  if (prop in source || isForced) {
    const origginal = source[prop]
    const wrapper = replacement(origginal)
    if (typeof wrapper === 'function') {
      source[prop] = wrapper
    }
  }
}

export const defaultFunctionName = '<anonymous>'

export function getFunctionName (fn: unknown): string {
  if (!fn || typeof fn !== 'function') {
    return defaultFunctionName
  }
  return fn.name || defaultFunctionName
}

export const throttle = (fn: Function, delay: number): Function => {
  let lock = false
  return function (...args: any) {
    if (lock) return
    fn.apply(this, args)
    lock = true
    setTimeout(() => {
      lock = false
    }, delay)
  }
}

export function getTimestamp (): number {
  return Date.now()
}

export function typeofAny (target: any, type: string): boolean {
  return typeof target === type
}

export function toStringAny (target: any, type: string): boolean {
  return nativeToString.call(target) === type
}

export function validateOptions (target: any, name: string, expectType: string): boolean {
  if (typeofAny(target, expectType)) return true
  return false
}

export function slientConsoleScope (callback: Function) {
  GLOBAL_CONSTANT.IS_LOG_ADD_BEHAVIOUR = false
  callback()
  GLOBAL_CONSTANT.IS_LOG_ADD_BEHAVIOUR = true
}

export function generateUUID (): string {
  let date = new Date().getTime()
  const uuid = `xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, function(v) {
    const num = (date + Math.random() * 16) % 16 | 0
    date = Math.floor(date / 16)
    return (v === 'x' ? num : ( num & 0x3 ) | 0x8).toString(16)
  })
  return uuid
}

export function unknownToString (target: unknown): string {
  if (variableTypeDictionary.isString(target)) {
    return target as string
  }
  return JSON.stringify(target)
}

export function getBigVersion (version: string) {
  return Number(version.split('.')[0])
}

export function isHttpFail (code: number) {
  return code === HTTPCODE.BAD_REQUEST || code === HTTPCODE.UNAUTHORIZED
}

export function setUrlQuery (url: string, query: object) {
  const arr = []
  Object.keys(query).forEach((key) => {
    arr.push(`${key}=${query[key]}`)
  })
  if (url.indexOf('?') !== -1) {
    url = `${url}&${arr.join('&')}`
  } else {
    url = `${url}?${arr.join('&')}`
  }
  return url
}

export function parseErroStrng (str: string): IntegrationError {
  const splitLine: string[] = str.split('\n')
  if (splitLine.length < 2) return null
  const message = splitLine.splice(0, 1)[0]
  const name = splitLine.splice(0, 1)[0].split(':')[0]
  const stacks = []
  splitLine.forEach((item: string) => {
    const regGetFun = /at\s+([\S]+)\s+\(/ // 获取 [ 函数名 ]
    const regGetFile = /\(([^)]+)\)/ // 获取 [ 有括号的文件 , 没括号的文件 ]
    const regexGetFileNoParenthese = /\s+at\s+(\S+)/ // 获取 [ 有括号的文件 , 没括号的文件 ]

    const funcExec = regGetFun.exec(item)
    let fileURLExec = regGetFile.exec(item)
    if (!fileURLExec) {
      fileURLExec = regexGetFileNoParenthese.exec(item)
    }

    const funcNameMatch = Array.isArray(funcExec) && funcExec.length > 0 ? funcExec[1].trim() : ''
    const fileURLMatch = Array.isArray(fileURLExec) && fileURLExec.length > 0 ? fileURLExec[1] : ''

    const info = fileURLMatch.split(':')

    stacks.push({
      args: [],
      func: funcNameMatch || ERRORTYPES.UNKNOWN_FUNCTION,
      column: Number(info.pop()),
      line: Number(info.pop()),
      url: info.join(':')
    })

    return {
      message,
      name,
      stacks
    }
  })
}