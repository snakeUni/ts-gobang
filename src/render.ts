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

export type 渲染棋子<某个棋子> = 某个棋子 extends 棋子 ? 某个棋子 : 不可能

export type 渲染单元格<某单元格> = 某单元格 extends 棋子
  ? 渲染棋子<某单元格>
  : '➕'

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
