import { ComponentPublicInstance, Ref, RenderFunction, SetupContext } from 'vue'
import { ValueOf, VXEComponent, VxeComponentBase, VxeEvent } from './component'
import { VNode, VNodeArrayChildren } from 'vue/dist/vue'

export namespace VxeTagPropTypes {
  export type content = string
  export type color = 'info' | 'primary' | 'success' | 'warning' | 'danger' | 'error' | 'perfect' | string
  export type closable = boolean
  export type closePosition = 'corner' | 'center'
  export type editable = boolean
  export type round = boolean
  export type tagStyle = 'default' | 'outline' | 'flag' | 'dashed' | 'mark' | 'arrow'
  export type size = 'medium' | 'small' | 'mini' | 'large'
  export type icon = string
  export type iconSet = string
  export type align = 'top' | 'middle' | 'bottom'
}
export type VxeTagProps = {
  /**
   * 内容
   */
  content?: VxeTagPropTypes.content
  /**
   * 颜色
   */
  color?: VxeTagPropTypes.color
  /**
   * 尺寸
   */
  size?: VxeTagPropTypes.size
  /**
   * 是否可关闭
   */
  closable?: VxeTagPropTypes.closable
  /**
   * 关闭按钮的位置
   */
  closePosition?: VxeTagPropTypes.closePosition
  /**
   * 是否可编辑
   */
  editable?: VxeTagPropTypes.editable
  /**
   * 是否圆角
   */
  round?: VxeTagPropTypes.round
  /**
   * 标签风格样式
   */
  tagStyle?: VxeTagPropTypes.tagStyle
  /**
   * 图标
   */
  icon?: VxeTagPropTypes.icon
  /**
   * 图标库类名 默认是vxe本身图标
   */
  iconSet?: VxeTagPropTypes.iconSet
  /**
   * 内容对齐方式
   */
  align?: VxeTagPropTypes.align
}

export interface TagReactData {
  inited: boolean,
  editing: boolean
}

export interface TagPrivateRef {
  refElem: Ref<HTMLSpanElement>
}

export interface VxeTagPrivateRef extends TagPrivateRef {}

export type VxeTagEmits = [
  'close',
  'update:content',
  'icon-click',
  'edit',
]

export interface TagMethods {
  dispatchEvent (type: ValueOf<VxeTagEmits>, params: any, evnt: Event): void

  /**
   * 关闭
   */
  close (event: Event): Promise<any>

  /**
   * 开始编辑
   */
  startEditing (): Promise<any>
}

export interface VxeTagMethods extends TagMethods {}

export interface VxeTagConstructor extends VxeComponentBase, VxeTagMethods {
  props: VxeTagProps
  context: SetupContext<VxeTagEmits>
  reactData: TagReactData

  getRefMaps (): VxeTagPrivateRef

  renderVN: RenderFunction
}

export namespace VxeTagDefines {

  interface TagEventParams extends VxeEvent {
    $tag: VxeTagConstructor
  }

  export interface CloseParams {}

  export interface IconClickParams {}

  export interface CloseEventParams extends TagEventParams, CloseParams {}

  export interface IconClickEventParams extends TagEventParams, IconClickParams {}
}
export namespace VxeTagEvents {
  export type Close = (params: VxeTagDefines.CloseEventParams) => void;
  export type IconClick = (params: VxeTagDefines.IconClickEventParams) => void;
}

export interface VxeTagEventProps {
  onClose?: VxeTagEvents.Close;
  onIconClick?: VxeTagEvents.IconClick;
}

export interface VxeTagSlots {
  /**
   * 内容
   */
  default: () => string | number | boolean | VNode | VNodeArrayChildren;
  /**
   * 头像
   */
  avatar: () => string | VNode
  /**
   * 图标
   */
  icon: () => string | VNode
}

export type VxeTagInstance = ComponentPublicInstance<VxeTagProps, VxeTagConstructor>
export const VxeTag: VXEComponent<VxeTagProps, VxeTagEventProps, VxeTagSlots>
/**
 * 组件 - 标签
 * @example import { VxeTag } from 'vxe-components'
 */
export const Tag: typeof VxeTag
