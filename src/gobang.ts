import { 棋子颜色 } from './color'
import { 棋子坐标 } from './position'
import { 不可能 } from './utils'

export type 棋子 = {
  颜色: 棋子颜色
  坐标: 棋子坐标
}

export type 构造棋子<颜色, 位置> = 颜色 extends 棋子颜色
  ? 位置 extends 棋子坐标
    ? {
        颜色: 颜色
        坐标: 位置
      }
    : 不可能
  : 不可能
