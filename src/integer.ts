import { 是, 否, 空, 不可能 } from './utils'

export type 零 = {
  是零吗: 是
}

export type 整数 = 零 | { 前一个数: 整数; 是零吗: 否 }

export type 加一<T extends 整数> = {
  前一个数: T
  是零吗: 否
}

export type 减一<T extends 整数> = T extends 加一<infer 前一个数>
  ? 前一个数
  : 不可能

// 五子棋的棋盘是 15 * 15，因此需要 15 个坐标
export type 一 = 加一<零>
export type 二 = 加一<一>
export type 三 = 加一<二>
export type 四 = 加一<三>
export type 五 = 加一<四>
export type 六 = 加一<五>
export type 七 = 加一<六>
export type 八 = 加一<七>
export type 九 = 加一<八>
export type 十 = 加一<九>
export type 十一 = 加一<十>
export type 十二 = 加一<十一>
export type 十三 = 加一<十二>
export type 十四 = 加一<十三>

// 运算
/**
 * 相等，如果都是继承了零则两个数是相同的
 */
export type 相等<T extends 整数, K extends 整数> = T extends 零
  ? K extends 零
    ? 是
    : 否
  : K extends 零
  ? 否
  : 相等<减一<T>, 减一<K>>

export type 大于<T extends 整数, K extends 整数> = T extends 零
  ? 否
  : K extends 零
  ? 是
  : 大于<减一<T>, 减一<K>>

export type 小于<T extends 整数, K extends 整数> = T extends 零
  ? K extends 零
    ? 否
    : 是
  : K extends 零
  ? 否
  : 小于<减一<T>, 减一<K>>

export type 大于等于<T extends 整数, K extends 整数> = 是 extends 相等<T, K>
  ? 是
  : 大于<T, K>

export type 小于等于<T extends 整数, K extends 整数> = 是 extends 相等<T, K>
  ? 是
  : 小于<T, K>
