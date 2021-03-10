import { ERRORTYPES } from '../shared/constant'
import { BehaviorPushData } from './behavior'

export interface AuthInfo {
  apiKey: string,
  sdkVersion: string,
  sdkName: string,
  traceId: string
}

export interface TransportDataType {
  authInfo: AuthInfo,
  behavior: BehaviorPushData[],
  data: any,
  record?: []
}

export interface ReportDataType {
  type?: ERRORTYPES,
  message?: string,
  url: string,
  name?: string,
  stack?: any,
  time?: number,
  level: string,
  errorId?: string,
  elapsedTime?: number,
  request?: {
    httpType?: string,
    traceId?: string,
    method: string,
    url: string,
    data: any
  },
  response?: {
    status: number,
    data: any
  },
  componentName?: string,
  propsData?: string,
  customTag?: string
}