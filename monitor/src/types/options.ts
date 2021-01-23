type CANCEL = null | undefined | boolean

export type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTIONS'

export enum ErrorMethos {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

interface IRequestHeaderConfig {
  url: HttpMethod,
  method: string
}

type TSetRequestHeader = (key: string, value: string) =>  {}

export interface IBeforeAppAjaxSendConfig {
  setRequestheader: TSetRequestHeader
}

export interface InitOptions {
  dsn: string,
  disabled: boolean,
  apikey: string,
  debug: boolean,
  enableTraceId: boolean,
  includeHttpUrlTraceIdRegExp: RegExp,
  traceIdFieldName: string,
  filterXhrUrlRegExp: RegExp,
  maxBehaviour: number
}

export interface HooksType {
  configReportXhr(xhr: XMLHttpRequest): void,

  beforeDataReport(): CANCEL,
  beforePushBehaviour(): CANCEL
  beforeAppAjaxSend(config: IRequestHeaderConfig): void,
  backTrackerId(): string
}

export interface SlientEventTypes {
  slientXhr: boolean,
  slientFetch: boolean,
  slientConsole: boolean,
  slientDom: boolean,
  slientHistory: boolean,
  slientHashchange: boolean,
  slientError: boolean,
  silentUnhandledrejection: boolean,
  slientVue: boolean,
  slientReact: boolean
}