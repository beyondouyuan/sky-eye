import { HTTPTYPE } from '../common/constant'

export interface IAnyObject {
  [key: string]: any
}

export interface SKYMONITORHttp {
  type: HTTPTYPE,
  traceId?: string,
  method?: string,
  url?: string,
  status?: number,
  req?: any,
  startTime?: number,
  elapsedTime?: number,
  response?: any,
  time?: number,
  isSDK?: boolean
}

/**
 * sdk http
*/
export interface SKYMONITORXMLHttpRequest extends XMLHttpRequest {
  [key: string]: any,
  sky_monitor_xhr?: SKYMONITORHttp
}

/**
 * 错误栈
*/
export interface ErrorStack {
  args: any[],
  func: string,
  column: number,
  line: number,
  url: string
}

/**
 * 错误栈整合
*/
export interface IntegrationError {
  message: string,
  name: string,
  stacks: ErrorStack[]
}