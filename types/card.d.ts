import { ValueOf, VNodeStyle, VXEComponent, VxeComponentBase, VxeEvent } from './component'
import { ComponentPublicInstance, Ref, RenderFunction, SetupContext, VNode, VNodeArrayChildren } from 'vue'

type transformMode = 'click' | 'hover' | 'click-hover'
export namespace VxeCardPropTypes {
  export type isCollapse = boolean
  export type loading = boolean
  export type width = string | number
  export type rotatingHeight = string | number
  export type round = boolean | string | number
  export type shadow = boolean
  export type transform = boolean | transformMode
  export type title = string
  export type hoverEffect = 'rotate' | 'scale' | 'press'
  export type rotateMode = 'vertical' | 'horizontal' | 'diagonal'
  export type bordered = boolean
}
export type VxeCardProps = {
  /**
   * 是否折叠
   */
  isCollapse?: VxeCardPropTypes.isCollapse
  /**
   * 加载中
   */
  loading?: VxeCardPropTypes.loading
  /**
   * 宽度
   */
  width?: VxeCardPropTypes.width
  /**
   * 翻转容器高度
   */
  rotatingHeight?: VxeCardPropTypes.rotatingHeight
  /*
  * 圆角
  * */
  round?: VxeCardPropTypes.round
  /**
   * 阴影
   */
  shadow?: VxeCardPropTypes.shadow
  /**
   * 是否可变形
   */
  transform?: VxeCardPropTypes.transform
  /**
   * 标题
   */
  title?: VxeCardPropTypes.title
  /**
   * 鼠标悬停阴影
   */
  hoverEffect?: VxeCardPropTypes.hoverEffect
  /**
   * 边框
   */
  bordered?: VxeCardPropTypes.bordered
  /**
   * 旋转模式
   */
  rotateMode?: VxeCardPropTypes.rotateMode
}
export interface CardReactData {
  inited: boolean,
  isCollapse: boolean,
  tempExpand: boolean,
}

export interface CardPrivateRef {
  refElem: Ref<HTMLDivElement>
}

export interface VxeCardPrivateRef extends CardPrivateRef {}

export type VxeCardEmits = [
  'rotate',
  'hover',
  'collapse',
  'expand',
  'update:is-collapse'
]

export interface CardMethods {
  dispatchEvent (type: ValueOf<VxeCardEmits>, params: any, evnt?: Event): void

  /**
   * 判断是否展开
   * @returns {boolean}
   */
  getCollapseIf (): boolean

  /**
   * 切换折叠状态
   */
  toggleCollapse (): Promise<any>

  /**
   * 展开面板
   */
  expand (): Promise<any>

  /**
   * 收起面板
   */
  collapse (): Promise<any>
}

export interface VxeCardMethods extends CardMethods {}

export interface VxeCardConstructor extends VxeComponentBase, VxeCardMethods {
  props: VxeCardProps
  context: SetupContext<VxeCardEmits>
  reactData: CardReactData

  getRefMaps (): VxeCardPrivateRef

  renderVN: RenderFunction
}

export namespace VxeCardDefines {
  interface CardEventParams extends VxeEvent {
    $card: VxeCardConstructor
  }

  export interface RotateParams {}

  export interface RotateEventParams extends CardEventParams, RotateParams {}

  export interface HoverParams {}

  export interface HoverEventParams extends CardEventParams, HoverParams {}

  export interface CollapseParams {}

  export interface CollapseEventParams extends CardEventParams, CollapseParams {}

  export interface ExpandParams {}

  export interface ExpandEventParams extends CardEventParams, ExpandParams {}
}

export namespace VxeCardEvents {
  export type Rotate = (params: VxeCardDefines.RotateEventParams) => void;
  export type Hover = (params: VxeCardDefines.HoverEventParams) => void;
  export type Collapse = (params: VxeCardDefines.CollapseEventParams) => void;
  export type Expand = (params: VxeCardDefines.ExpandEventParams) => void;
}

export interface VxeCardEventProps {
  onRotate?: VxeCardEvents.Rotate
  onHover?: VxeCardEvents.Hover
  onCollapse?: VxeCardEvents.Collapse
  onExpand?: VxeCardEvents.Expand
}

export interface VxeCardSlots {
  /**
   * 内容
   */
  default: () => string | number | boolean | VNode | VNodeArrayChildren
  /**
   * header
   */
  header: (params: {
    title?: string
  }) => string | number | VNode | VNodeArrayChildren
  /**
   * back 背面内容
   */
  back: () => string | number | boolean | VNode | VNodeArrayChildren
  /**
   * cover 封面，collapse之后的展示
   */
  cover: (params: {
    title?: string
  }) => string | number | boolean | VNode
  /**
   * footer
   */
  footer: () => string | number | VNode | VNodeArrayChildren
}

export type VxeCardInstance = ComponentPublicInstance<VxeCardProps, VxeCardConstructor>
export const VxeCard: VXEComponent<VxeCardProps, VxeCardEventProps, VxeCardSlots>
/**
 * 组件 - 卡片
 * @example import { VxeCard } from 'exv'
 */
export const Card: typeof VxeCard
