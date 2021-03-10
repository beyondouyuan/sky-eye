import { BehaviorPushData } from './behavior'
import { ReportDataType } from './transport-data'

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

export interface InitOptions extends SlientEventTypes, HooksType {
  dsn?: string,
  disabled?: boolean,
  apikey?: string,
  debug?: boolean,
  enableTraceId?: boolean,
  includeHttpUrlTraceIdRegExp?: RegExp,
  traceIdFieldName?: string,
  filterXhrUrlRegExp?: RegExp,
  maxBehaviour?: number
}

export interface HooksType {
  configReportXhr?(xhr: XMLHttpRequest): void,

  beforeDataReport?(event: ReportDataType): PromiseLike<ReportDataType | null> | ReportDataType | CANCEL,
  beforePushBehaviour?(hint: BehaviorPushData): CANCEL
  beforeAppAjaxSend?(config: IRequestHeaderConfig, setRequestheader: IBeforeAppAjaxSendConfig): void,
  backTrackerId?(): string | number
}

export interface SlientEventTypes {
  slientXhr?: boolean,
  slientFetch?: boolean,
  slientConsole?: boolean,
  slientDom?: boolean,
  slientHistory?: boolean,
  slientHashchange?: boolean,
  slientError?: boolean,
  silentUnhandledrejection?: boolean,
  slientVue?: boolean,
  slientReact?: boolean
}