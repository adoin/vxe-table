import { VxeTagProps, VxeTagPropTypes } from './tag'
import { Ref } from 'vue'

export namespace VxeTagsPropTypes {
  export type children = Array<string | number | VxeTagProps>
  export type color = VxeTagPropTypes.color
  export type size = VxeTagPropTypes.size
  export type closable = VxeTagPropTypes.closable
  export type round = VxeTagPropTypes.round
  export type tagStyle = VxeTagPropTypes.tagStyle
  export type icon = VxeTagPropTypes.icon
  export type iconSet = VxeTagPropTypes.iconSet
  export type align = VxeTagPropTypes.align
  export type creator = (value:string)=>void
}
export type VxeTagsProps = {
  children?: VxeTagsPropTypes.children
  color?: VxeTagsPropTypes.color
  size?: VxeTagsPropTypes.size
  closable?: VxeTagsPropTypes.closable
  round?: VxeTagsPropTypes.round
  tagStyle?: VxeTagsPropTypes.tagStyle
  icon?: VxeTagsPropTypes.icon
  iconSet?: VxeTagsPropTypes.iconSet
  align?: VxeTagsPropTypes.align
  creator?: VxeTagsPropTypes.creator
}

export interface TagsReactData {
  inited: boolean,
}

export interface TagsPrivateRef {
  refElem: Ref<HTMLDivElement>
}

export interface VxeTagsPrivateRef extends TagsPrivateRef {}

export type VxeTagsEmits = [
  'close',
  'edit',
  'icon-click',
  'tag-created',
]
