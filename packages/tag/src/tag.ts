import { defineComponent, PropType, reactive, Ref } from 'vue'
import { TagReactData, VxeTagConstructor, VxeTagEmits, VxeTagMethods, VxeTagPropTypes } from '../../../types/tag'
import XEUtils from 'xe-utils'

export default defineComponent({
  name: 'vxeTag',
  props: {
    color: {
      type: String as PropType<VxeTagPropTypes.color>,
      default: 'default'
    },
    closable: {
      type: Boolean as PropType<VxeTagPropTypes.closable>,
      default: false
    },
    tagStyle: {
      type: String as PropType<VxeTagPropTypes.tagStyle>,
      default: 'default'
    },
    icon: String as PropType<VxeTagPropTypes.icon>,
    iconSet: {
      type: String as PropType<VxeTagPropTypes.iconSet>,
      default: ''
    }
  },
  emits: [
    'close'
  ] as VxeTagEmits,
  setup (props, context) {
    const { slots, emit } = context
    const xID = XEUtils.uniqueId()
    const reactData = reactive<TagReactData>({
      inited: false
    })
    const refElem = ref() as Ref<HTMLSpanElement>
    const refMaps = {
      refElem
    }
    const closeTag = () => {

    }
    let tagMethods = {} as VxeTagMethods
    const $vxtag = {
      xID,
      props,
      context,
      reactData,
      getRefMaps: () => refMaps
    } as unknown as VxeTagConstructor
    tagMethods = {
      dispatchEvent (type, params, evnt) {
        emit(type, Object.assign({ $tag: $vxtag, $event: evnt }, params))
      },
      close: closeTag
    }
  }
})
