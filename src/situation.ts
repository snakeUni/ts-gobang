import {
  零,
  一,
  二,
  三,
  四,
  五,
  六,
  七,
  八,
  九,
  十,
  十一,
  十二,
  十三,
  十四
} from './integer'
import { 空, 不可能 } from './utils'
import { 棋子 } from './gobang'

export type 单元格内容参数 = 棋子 | 空

// 链表的形式
export type 棋局单元 = {
  内容: 单元格内容参数
  下一个: 棋局单元 | 空
}

export type 构造棋局单元<内容参数, 下一个> = 内容参数 extends 单元格内容参数
  ? 下一个 extends 棋局单元 | 空
    ? {
        内容: 内容参数
        下一个: 下一个
      }
    : 不可能
  : 不可能

export type 行内容参数 = [
  单元格内容参数,
  单元格内容参数,
  单元格内容参数,
  单元格内容参数,
  单元格内容参数,
  单元格内容参数,
  单元格内容参数,
  单元格内容参数,
  单元格内容参数,
  单元格内容参数,
  单元格内容参数,
  单元格内容参数,
  单元格内容参数,
  单元格内容参数,
  单元格内容参数
]

export type 棋局内容参数 = [
  行内容参数,
  行内容参数,
  行内容参数,
  行内容参数,
  行内容参数,
  行内容参数,
  行内容参数,
  行内容参数,
  行内容参数,
  行内容参数,
  行内容参数,
  行内容参数,
  行内容参数,
  行内容参数,
  行内容参数
]