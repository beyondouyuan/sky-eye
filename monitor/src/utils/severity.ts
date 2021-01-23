export enum Severity {
  Else = 'else',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Debug = 'debug',
  Low = 'low',
  Normal = 'normal',
  High = 'high'
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Severity {
  export function fromString (level: string): Severity {
    switch (level) {
      case 'debug':
        return Severity.Debug
      case 'info':
      case 'log':
      case 'assert':
        return Severity.Info
      case 'warn':
      case 'warning':
        return Severity.Warning
      case Severity.Low:
      case Severity.Normal:
      case Severity.High:
      case 'error':
        return Severity.Error
      default:
        return Severity.Else
    }
  }
}