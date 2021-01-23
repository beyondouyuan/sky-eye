import { BEHAVIOURTYPES, ERRORTYPES } from '../common/constant'

/**
 * 资源错误
*/
export interface ResourceErrorTarget {
  src?: string,
  href?: string,
  localName?: string
}

const handleEvents = {
  /**
   * 处理xhr fetch回调
  */
  handleHttp (data: any, type: BEHAVIOURTYPES): void {
    console.log(data, type )
  },

  /**
   * 处理window error监听糊掉
   */
  handleError (errorEvent: ERRORTYPES): void {
    console.log(errorEvent)
  },

  /**
   * 处理window history
  */
  handleHistory (data: string): void {
    console.log(data)
  },

  /**
   * 处理window hash
  */
  handleHashChange (data: string): void {
    console.log(data)
  },

  /**
   * 处理 unhandleRejection
   */
  handleUnhandleRejection (ev): void {
    console.log(ev)
  },

  /**
   * 处理console事件回调
  */
  handleConsole (data: string): void {
    console.log(data)
  }
}

export { handleEvents }
