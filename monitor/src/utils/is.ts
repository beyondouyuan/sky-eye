export const nativeToString = Object.prototype.toString

/**
 * 类型
 */
function isType (type: string) {
  return function (value: any): boolean {
    return nativeToString.call(value) === `[object ${type}]`
  }
}
/**
 * 类型字典
 */
export const variableTypeDictionary = {
  isNumber: isType('Number'),
  isString: isType('String'),
  isBoolean: isType('Boolean'),
  isNull: isType('Null'),
  isUndefined: isType('Undefined'),
  isSymbol: isType('symbol'),
  isFunction: isType('Function'),
  isObject: isType('Object'),
  isArray: isType('Array'),
  isProcess: isType('process'),
  isWindow: isType('Window')
}

export function isError (wat: any): boolean {
  switch (nativeToString.call(wat)) {
    case '[object Error]':
      return true
    case '[object Exception]':
      return true
    case '[object DOMException]':
      return true
    default:
      return isInstanceOf(wat, Error)
  }
}

export function isInstanceOf(wat: any, base: any): boolean {
  try {
    // tslint:disable-next-line:no-unsafe-any
    return wat instanceof base
  } catch (_e) {
    return false
  }
}

export function isExistProperty(obj: Object, key: string | number | symbol): boolean {
  return obj.hasOwnProperty(key)
}