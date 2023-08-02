import {
  defineComponent,
  h,
  ref,
  Ref,
  computed,
  Teleport,
  VNode,
  onUnmounted,
  reactive,
  nextTick,
  PropType,
  onMounted
} from 'vue'
import {
  CardPrivateRef,
  CardReactData,
  isCollapse,
  VxeCardConstructor,
  VxeCardEmits,
  VxeCardMethods,
  VxeCardPropTypes
} from '../../../types/card'
import XEUtils from 'xe-utils'
import GlobalConfig from '../../v-x-e-table/src/conf'
import { getFuncText } from '../../tools/utils'

export default defineComponent({
  name: 'VxeCard',
  props: {
    isCollapse: Boolean as PropType<VxeCardPropTypes.isCollapse>,
    loading: Boolean as PropType<VxeCardPropTypes.loading>,
    round: [Boolean, String, Number] as PropType<VxeCardPropTypes.round>,
    shadow: {
      type: Boolean as PropType<VxeCardPropTypes.shadow>,
      default: true
    },
    title: String as PropType<VxeCardPropTypes.title>,
    hoverEffect: String as PropType<VxeCardPropTypes.hoverEffect>,
    bordered: {
      type: Boolean as PropType<VxeCardPropTypes.bordered>,
      default: true
    },
    rotateMode: {
      type: String as PropType<VxeCardPropTypes.rotateMode>,
      default: 'horizontal'
    },
    headStyle: Object as PropType<VxeCardPropTypes.headStyle>
  },
  emits: [
    'rotate',
    'hover',
    'collapse',
    'expand',
    'update:isCollapse'
  ] as VxeCardEmits,
  setup (props, context) {
    const { slots, emit } = context
    const xID = XEUtils.uniqueId()
    const reactData = reactive<CardReactData>({
      inited: false,
      isCollapse: !!props.isCollapse
    })
    const refElem = ref() as Ref<HTMLDivElement>
    const refBody = ref() as Ref<HTMLDivElement>
    const refHeader = ref() as Ref<HTMLDivElement>
    const refFooter = ref() as Ref<HTMLDivElement>
    const refCover = ref() as Ref<HTMLDivElement>
    const refBack = ref() as Ref<HTMLDivElement>

    const refMaps: CardPrivateRef = {
      refElem
    }

    const $vxcard = {
      xID,
      props,
      context,
      reactData,
      getRefMaps: () => refMaps
    } as unknown as VxeCardConstructor

    let cardMethods = {} as VxeCardMethods

    const rotateEvent = (evnt: Event) => {
      cardMethods.dispatchEvent('rotate', {}, evnt)
    }

    const hoverEvent = (evnt: Event, flag: boolean) => {
      cardMethods.dispatchEvent('hover', { flag }, evnt)
    }

    const collapseEvent = (evnt: Event, flag: boolean) => {
      cardMethods.dispatchEvent('collapse', { flag }, evnt)
    }

    const expandEvent = (evnt: Event, flag: boolean) => {
      cardMethods.dispatchEvent('expand', { flag }, evnt)
    }

    const getCollapseIf = () => {
      return reactData.isCollapse
    }

    const toggleCollapse = () => {
      const isCollapse = !reactData.isCollapse
      reactData.isCollapse = isCollapse
      emit('update:isCollapse', isCollapse)
      emit(isCollapse ? 'collapse' : 'expand')
      return nextTick()
    }
    const expand = () => {
      if (reactData.isCollapse) {
        return toggleCollapse()
      }
      return nextTick()
    }
    const collapse = () => {
      if (!reactData.isCollapse) {
        return toggleCollapse()
      }
      return nextTick()
    }
    cardMethods = {
      dispatchEvent (type, params, evnt) {
        emit(type, Object.assign({ $card: $vxcard, $event: evnt }, params))
      },
      getCollapseIf,
      toggleCollapse,
      expand,
      collapse
    }

    Object.assign($vxcard, cardMethods)
    const renderCoverContent = () => {
      const { title, loading } = props
      const contVNs: VNode[] = []
      if (loading) {
        contVNs.push(
          h('i', {
            class: ['vxe-button--loading-icon', GlobalConfig.icon.BUTTON_LOADING]
          })
        )
      }
      if (title) {
        contVNs.push(

        )
      }
      return contVNs
    }
    const renderCover = () => h('div', {
      ref: refCover,
      class: ['vxe-card--cover', { 'vxe-card-loading': props.loading }]
    }, [
      slots.cover?.(props.title) ?? h('span', {
        class: 'vxe-cover--content'
      }, getFuncText(props.title))
    ])
    const renderVN = () => {
      return reactData.isCollapse
        ? renderCover()
        : h('div', {
          ref: refElem,
          class: ['vxe-card']
        })
    }
    $vxcard.renderVN = renderVN
    return $vxcard
  },
  render () {
    return this.renderVN()
  }
})
