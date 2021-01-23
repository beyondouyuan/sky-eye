import { voidFun } from '../common/constant'

export function nativeTryCatch (fn: voidFun, errorFn?: (err: any) => void): void {
  try {
    fn()
  } catch (error) {
    console.log('err', error)
    if (errorFn) {
      errorFn(error)
    }
  }
}