import {
  defineComponent,
  h,
  ref,
  Ref,
  reactive,
  nextTick,
  PropType,
  computed, watchEffect
} from 'vue'
import {
  CardPrivateRef,
  CardReactData,
  VxeCardConstructor,
  VxeCardEmits,
  VxeCardMethods,
  VxeCardPropTypes
} from '../../../types/card'
import XEUtils, { isNumber } from 'xe-utils'
import GlobalConfig from '../../v-x-e-table/src/conf'
import { getFuncText } from '../../tools/utils'

export default defineComponent({
  name: 'VxeCard',
  props: {
    isCollapse: Boolean as PropType<VxeCardPropTypes.isCollapse>,
    loading: Boolean as PropType<VxeCardPropTypes.loading>,
    round: {
      type: [Boolean, String, Number] as PropType<VxeCardPropTypes.round>,
      default: () => GlobalConfig.card.round
    },
    shadow: {
      type: Boolean as PropType<VxeCardPropTypes.shadow>,
      default: () => GlobalConfig.card.shadow
    },
    transform: [Boolean, String] as PropType<VxeCardPropTypes.transform>,
    title: String as PropType<VxeCardPropTypes.title>,
    hoverEffect: String as PropType<VxeCardPropTypes.hoverEffect>,
    bordered: {
      type: Boolean as PropType<VxeCardPropTypes.bordered>,
      default: () => GlobalConfig.card.bordered
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
    'update:is-collapse'
  ] as VxeCardEmits,
  setup (props, context) {
    const { slots, emit } = context
    const xID = XEUtils.uniqueId()
    const reactData = reactive<CardReactData>({
      inited: false,
      isCollapse: !!props.isCollapse,
      tempExpand: false
    })
    const refBox = ref() as Ref<HTMLDivElement>
    const refElem = ref() as Ref<HTMLDivElement>
    const refBody = ref() as Ref<HTMLDivElement>
    const refHeader = ref() as Ref<HTMLDivElement>
    const refFooter = ref() as Ref<HTMLDivElement>
    const refFront = ref() as Ref<HTMLDivElement>
    const refBack = ref() as Ref<HTMLDivElement>
    watchEffect(() => {
      reactData.isCollapse = !!props.isCollapse
    })
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
      emit('update:is-collapse', isCollapse)
      emit(isCollapse ? 'collapse' : 'expand')
      return nextTick()
    }
    const perhapsExpand = () => {
      if (props.transform && reactData.isCollapse) {
        expand()
      }
    }
    const expand = () => {
      if (reactData.isCollapse) {
        return toggleCollapse()
      }
      return nextTick()
    }
    const handleHoverCover = () => {
      if (props.transform === 'hover') {
        reactData.tempExpand = true
      }
    }
    const handleCardLeave = () => {
      if (props.transform === 'hover') {
        reactData.tempExpand = false
      }
    }
    const collapse = () => {
      if (!reactData.isCollapse) {
        return toggleCollapse()
      }
      return nextTick()
    }
    const handleHeaderClick = (event: Event) => {
      event.stopPropagation()
      if (props.transform === true || props.transform === 'click' || props.transform === 'click-hover') {
        emit('update:is-collapse', true)
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

    const renderCardHeader = () => h('div', {
      ref: refHeader,
      class: 'vxe-card-header',
      onClick: handleHeaderClick
    }, [
      slots.header?.({ title: props.title }) ?? h('span', {
        class: 'vxe-card-header--title'
      }, getFuncText(props.title))
    ])
    const renderCardFront = () => h('div', {
      ref: refFront,
      class: [
        'vxe-card',
        'vxe-card-rotating-front',
        (isCol.value ? 'vxe-card-cover vxe-card-cover--circle'
          : {
              'vxe-card--shadow': props.shadow,
              'vxe-card--press': props.hoverEffect === 'press',
              'vxe-card--scale': props.hoverEffect === 'scale'
            })
      ]
    }, [
      slots.header || props.title ? renderCardHeader() : null,
      renderCardBody(),
      renderCardFooter()
    ])
    const renderCardBack = () => h('div', {
      ref: refBack,
      class: [
        'vxe-card',
        'vxe-card-rotating-back',
        (isCol.value ? 'vxe-card-cover vxe-card-cover--circle'
          : {
              'vxe-card--shadow': props.shadow,
              'vxe-card--press': props.hoverEffect === 'press',
              'vxe-card--scale': props.hoverEffect === 'scale'
            })
      ]
    },
    [
      slots.back?.() ?? slots.default?.() ?? ''
    ])
    const renderCardBody = () => h('div', {
      ref: refBody,
      class: 'vxe-card-body'
    }, [
      slots.default?.()
    ])
    const renderCardFooter = () => slots.footer ? h('div', {
      ref: refFooter,
      class: 'vxe-card-footer'
    }, [
      slots.footer?.()
    ]) : null
    const isCol = computed(() => (reactData.isCollapse && !reactData.tempExpand) && props.transform)
    const renderVN = () => {
      return props.hoverEffect === 'rotate'
        ? h('div', {
          ref: refBox,
          class: [
            'vxe-card-rotating-box',
            `vxe-card--rotating-${props.rotateMode}`
          ]
        }, [
          renderCardFront(),
          renderCardBack()
        ])
        : h('div', {
          ref: refElem,
          class: [
            'vxe-card',
            (isCol.value ? 'vxe-card-cover vxe-card-cover--circle'
              : {
                  'vxe-card--shadow': props.shadow,
                  'vxe-card--press': props.hoverEffect === 'press',
                  'vxe-card--scale': props.hoverEffect === 'scale'
                })
          ],
          style: isCol.value ? null : {
            borderRadius: (props.round === false || props.round === undefined) ? 'unset'
              : props.round === true ? '5px'
                : isNumber(props.round) ? `${props.round}px`
                  : (props.round as string)
          },
          onClick: perhapsExpand,
          onMoudseenter: handleHoverCover,
          onMouseout: handleCardLeave
        }, isCol.value ? h('span', {
          class: 'vxe-cover--content'
        }, getFuncText(props.title))
          : [
              slots.header || props.title ? renderCardHeader() : null,
              renderCardBody(),
              renderCardFooter()
            ])
    }
    $vxcard.renderVN = renderVN
    return $vxcard
  },
  render () {
    return this.renderVN()
  }
})
