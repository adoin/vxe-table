import { Ref, RenderFunction, SetupContext } from 'vue'
import { ValueOf, VXEComponent, VxeComponentBase, VxeEvent } from './component'
import { VNode, VNodeArrayChildren } from 'vue/dist/vue'

export namespace VxeTagPropTypes {
  export type content = string
  export type color = string
  export type closable = boolean
  export type tagStyle = 'default' | 'outline' | 'flag' | 'dashed' | 'mark'
  export type icon = string
  export type iconSet = string
}
export type VxeTagProps = {
  content?: VxeTagPropTypes.content
  /**
   * 颜色
   */
  color?: VxeTagPropTypes.color
  /**
   * 是否可关闭
   */
  closable?: VxeTagPropTypes.closable
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
}

export interface TagReactData {
  inited: boolean,
}

export interface TagPrivateRef {
  refElem: Ref<HTMLDivElement>
}

export interface VxeTagPrivateRef extends TagPrivateRef {}

export type VxeTagEmits = [
  'close'
]

export interface TagMethods {
  dispatchEvent (type: ValueOf<VxeTagEmits>, params: any, evnt: Event): void

  /**
   * 关闭
   */
  close (): Promise<any>
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

  export interface CloseEventParams extends TagEventParams, CloseParams {}
}
export namespace VxeTagEvents {
  export type Close = (params: VxeTagDefines.CloseEventParams) => void;
}

export interface VxeTagEventProps {
  onClose?: VxeTagEvents.Close;
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

export const VxeTag: VXEComponent<VxeTagProps, VxeTagEventProps, VxeTagSlots>
/**
 * 组件 - 标签
 * @example import { VxeTag } from 'exv'
 */
export const card: typeof VxeTag
