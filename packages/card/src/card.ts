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
  VxeCardConstructor,
  VxeCardEmits,
  VxeCardMethods,
  VxeCardPropTypes
} from '../../../types/card'
import XEUtils from 'xe-utils'

export default defineComponent({
  name: 'VxeCard',
  props: {
    isCollapse: Boolean as PropType<VxeCardPropTypes.isCollapse>,
    loading: Boolean as PropType<VxeCardPropTypes.loading>,
    round: [Boolean, String, Number] as PropType<VxeCardPropTypes.round>,
    shadow: Boolean as PropType<VxeCardPropTypes.shadow>,
    title: String as PropType<VxeCardPropTypes.title>,
    hoverEffect: [Boolean, String] as PropType<VxeCardPropTypes.hoverEffect>,
    bordered: Boolean as PropType<VxeCardPropTypes.bordered>,
    rotateMode: String as PropType<VxeCardPropTypes.rotateMode>,
    headStyle: Object as PropType<VxeCardPropTypes.headStyle>
  },
  emits: [
    'rotate',
    'close',
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

    const cardMethods = {} as VxeCardMethods

    const rotateEvent = (evnt: Event) => {
      cardMethods.dispatchEvent('rotate', {}, evnt)
    }

    const closeEvent = (evnt: Event) => {
      cardMethods.dispatchEvent('close', {}, evnt)
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
  }
})
