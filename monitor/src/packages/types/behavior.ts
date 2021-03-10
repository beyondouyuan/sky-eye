export interface BehaviorPushData {
  // 事件类型
  type: string,
  // 数据类型
  data: any,
  // 分类
  category?: string,
  // 时间
  time?: number,
  // 级别
  level: number
}