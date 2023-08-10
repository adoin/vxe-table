import { defineComponent, h, PropType, reactive, ref, Ref } from 'vue'
import {
  TagReactData,
  VxeTagConstructor,
  VxeTagEmits,
  VxeTagMethods,
  VxeTagPropTypes
} from '../../../types/tag'
import XEUtils from 'xe-utils'
import { getFuncText } from '../../tools/utils'

export default defineComponent({
  name: 'vxeTag',
  props: {
    content: [String, Number] as PropType<VxeTagPropTypes.content>,
    color: {
      type: String as PropType<VxeTagPropTypes.color>,
      default: 'default'
    },
    size: {
      type: String as PropType<VxeTagPropTypes.size>,
      default: 'medium'
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
    },
    align: {
      type: String as PropType<VxeTagPropTypes.align>,
      default: 'middle'
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
    const closeTag = () => new Promise(() => {
      // todo
      emit('close', { $event: { tag: $vxtag } })
    })
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
    Object.assign($vxtag, tagMethods)
    const renderContent = () => slots?.default?.() ?? getFuncText(props.content)
    const renderVN = () => {
      const presetColors = [
        'default', 'info', 'primary', 'success', 'warning', 'danger', 'error', 'perfect'
      ]
      return h('span', {
        ref: refElem,
        class: [
          'vxe-tag',
            `size--${props.size}`,
            `vxe-tag-type--${props.tagStyle}`,
            `vxe-tag-align--${props.align}`,
            props.color
              ? presetColors.includes(props.color)
                ? `vxe-tag-color--${props.color}`
                : ''
              : 'vxe-tag-color--default',
            {
              closable: props.closable
            }
        ],
        style: presetColors.includes(props.color) ? null : {
          '--tag-color': props.color
        },
        onClick: (evnt: Event) => {
          closeTag()
          tagMethods.dispatchEvent('close', {}, evnt)
        }
      },
      [
        h('div',
          {
            class: 'vxe-tag-close-modal'
          }
        ),
        h('span', {
          class: 'vxe-tag-content'
        }, [renderContent()])
      ]
      )
    }
    $vxtag.renderVN = renderVN
    return $vxtag
  },
  render () {
    return this.renderVN()
  }
})
