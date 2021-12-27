import { 棋子 } from './gobang'
import { 不可能 } from './utils'
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
import { 棋局, 获取棋局指定行, 棋局行, 棋局单元 } from './situation'
import { 棋子纵坐标 } from './position'

export type 渲染棋子<某个棋子> = 某个棋子 extends 棋子
  ? 某个棋子['颜色']
  : 不可能

export type 渲染单元格<某单元格> = 某单元格 extends 棋子
  ? 渲染棋子<某单元格>
  : '➕'

export type 渲染单元链表<
  某单元 extends 棋局单元,
  初始渲染结果 extends string
> = 某单元['下一个'] extends 棋局单元
  ? 渲染单元链表<
      某单元['下一个'],
      `${初始渲染结果} ${渲染单元格<某单元['内容']>}`
    >
  : `${初始渲染结果} ${渲染单元格<某单元['内容']>}`

type 数字键值对 = {
  零: 零
  一: 一
  二: 二
  三: 三
  四: 四
  五: 五
  六: 六
  七: 七
  八: 八
  九: 九
  十: 十
  十一: 十一
  十二: 十二
  十三: 十三
  十四: 十四
}

export type 渲染指定行<
  某棋局 extends 棋局,
  行号 extends 棋子纵坐标
> = 获取棋局指定行<某棋局, 行号> extends infer 某行
  ? 某行 extends 棋局行
    ? `|-${渲染单元链表<某行['内容'], ''>}`
    : 不可能
  : 不可能

export type 渲染棋局<某个棋局 extends 棋局> = {
  [key in
    | '零'
    | '一'
    | '二'
    | '三'
    | '四'
    | '五'
    | '六'
    | '七'
    | '八'
    | '九'
    | '十'
    | '十一'
    | '十二'
    | '十三'
    | '十四']: 渲染指定行<
    某个棋局,
    key extends keyof 数字键值对 ? 数字键值对[key] : 不可能
  >
}
