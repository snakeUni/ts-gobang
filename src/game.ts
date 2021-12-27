import { 棋子 } from './gobang'
import { 空, 是, 不可能, 否 } from './utils'
import { 最大横坐标, 最大纵坐标, 棋子坐标 } from './position'
import { 获取棋局某位置的棋子, 棋局 } from './situation'

export type 棋子可以放在这里吗<
  某棋局 extends 棋局,
  位置 extends 棋子坐标
> = 获取棋局某位置的棋子<某棋局, 位置> extends 空 ? 是 : 否
