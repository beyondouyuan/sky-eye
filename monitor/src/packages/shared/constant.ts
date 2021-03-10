export type voidFun = () => void

/**
 * 上报错误类型
 */
export enum ERRORTYPES {
  UNKNOWN = 'UNKNOWN',
  UNKNOWN_FUNCTION = 'UNKNOWN_FUNCTION',
  JAVASCRIPT_ERROR = 'JAVASCRIPT_ERROR',
  LOG_ERROR = 'LOG_ERROR',
  FETCH_ERROR = 'FETCH_ERROR',
  VUE_ERROR = 'VUE_ERROR',
  REACT_ERROR = 'REACT_ERROR',
  RESOURCE_ERROR = 'RESOURCE_ERROR',
  PROMISE_ERROR = 'PROMISE_ERROR',
  ROUTE_ERROR = 'ROUTE_ERROR'
}

export const CompositeEvents = {
  ...ERRORTYPES
}

export type CompositeEvents = typeof CompositeEvents

/**
 * 用户行为栈事件类型
 */
export enum BEHAVIOURTYPES {
  ROUTE = 'ROUTE',
  CLICK = 'UI.CLICK',
  CONSOLE = 'CONSOLE',
  XHR = 'XHR',
  FETCH = 'FETCH',
  UNHANDLEDREJECTION = 'UNHANDLEDREJECTION',
  VUE = 'VUE',
  REACT = 'REACT',
  RESOURCE = 'RESOURCE',
  CODE_ERROR = 'CODE_ERROR',
  CUSTOMER = 'CUSTOMER'
}

/**
 * 用户行为整合类型
 */
export enum BEHAVIOURCATEGORYS {
  HTTP = 'HTTP',
  USER = 'USER',
  DEBUG = 'DEBUG',
  EXCEPTION = 'EXCEPTION',
  LIFECYCLE = 'LIFECYCLE'
}

/**
 * 重写的事件类型
 */
export enum EVENTTYPES {
  XHR = 'xhr',
  FETCH = 'fetch',
  CONSOLE = 'console',
  DOM = 'dom',
  ERROR = 'erro',
  HISTORY = 'history',
  HASHCHANGE= 'hashchange',
  UNHANDLEDREJECTION = 'unhandledrejection',
  VUE = 'Vue'
}

/**
 * http类型
 */
export enum HTTPTYPE {
  XHR = 'xhr',
  FETCH = 'fetch'
}

/**
 * http 状态吗
 */
export enum HTTPCODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  INTERNAL_EXCEPTION = 500
}

export const ERROR_TYPE_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/

const GLOBAL_CONSTANT = {
  IS_LOG_ADD_BEHAVIOUR: true,
  CROSSORIGINTHRESHOLD: 1000
}

export { GLOBAL_CONSTANT }