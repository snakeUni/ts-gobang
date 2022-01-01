import { 棋子 } from './gobang'
import { 空, 是, 不可能, 否 } from './utils'
import { 黑色, 白色, 棋子颜色 } from './color'
import { 一, 五, 加一, 零, 整数 } from './integer'
import {
  最大横坐标,
  最大纵坐标,
  棋子坐标,
  左邻位,
  右邻位,
  上邻位,
  下邻位,
  左上对角,
  右上对角,
  左下对角,
  右下对角
} from './position'
import { 获取棋局某位置的棋子, 棋局 } from './situation'

export type 棋子可以放在这里吗<
  某棋局 extends 棋局,
  位置 extends 棋子坐标
> = 获取棋局某位置的棋子<某棋局, 位置> extends 空 ? 是 : 否

// export type 某种颜色棋子可以横向连成五子吗<某颜色 extends 棋子颜色> =

export type 棋子可以横向连成五子吗<
  某棋局 extends 棋局,
  某棋子 extends 棋子,
  某颜色 extends 棋子颜色,
  初始值 extends 整数
> = 某棋子['颜色'] extends 某颜色
  ? 棋子可以横向连成五子吗<
      某棋局,
      获取棋局某位置的棋子<某棋局, 左邻位<某棋子['坐标']>> extends 棋子,
      某颜色,
      加一<初始值>
    >
  : 否

export type 连续同颜色棋子横向的个数< 某棋局 extends 棋局,
某棋子 extends 棋子,
某颜色 extends 棋子颜色,
初始值 extends 整数> = 某棋子['颜色'] extends 某颜色


// export type 棋子可以纵向连成五子吗

// export type 棋子可以右上左下连成五子吗

// export type 棋子可以左上右下连成五子吗

// export type 棋子连成五子了吗<某棋子 extends 棋子> =
