import XEUtils from 'xe-utils'
import GlobalConfig from '../v-x-e-table/src/conf'
import DomZIndex from 'dom-zindex'

export function isEnableConf (conf: any): boolean {
  return conf && conf.enabled !== false
}

export function isEmptyValue (cellValue: any) {
  return cellValue === null || cellValue === undefined || cellValue === ''
}

export function parseFile (file: File) {
  const name = file.name
  const tIndex = XEUtils.lastIndexOf(name, '.')
  const type = name.substring(tIndex + 1, name.length).toLowerCase()
  const filename = name.substring(0, tIndex)
  return { filename, type }
}

export function nextZIndex () {
  return DomZIndex.getNext()
}

export function getLastZIndex () {
  return DomZIndex.getCurrent()
}

export function hasChildrenList (item: any) {
  return item && item.children && item.children.length > 0
}

export function getFuncText (content?: string | number | boolean | null) {
  return content ? XEUtils.toValueString(GlobalConfig.translate ? GlobalConfig.translate('' + content) : content) : ''
}

export function formatText (value: any, placeholder?: any) {
  return '' + (isEmptyValue(value) ? (placeholder ? GlobalConfig.emptyCell : '') : value)
}

/**
 * 判断值为：'' | null | undefined 时都属于空值
 */
export function eqEmptyValue (cellValue: any) {
  return cellValue === '' || XEUtils.eqNull(cellValue)
}

export const multiDebounce = (functionArray: Array<(...args: any[]) => any>, duration: number) => {
  let timer: number
  return functionArray.reduce((acc, cur) => {
    acc[cur.name] = (...args: any[]) => {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        cur(...args)
      }, duration)
    }
    return acc
  }, {} as Record<string, (...args: any[]) => any>)
}
export const multiThrottle = (functionArray: Array<(...args: any[]) => any>, duration: number) => {
  let timer: number
  return functionArray.reduce((acc, cur) => {
    acc[cur.name] = (...args: any[]) => {
      if (!timer) {
        timer = window.setTimeout(() => {
          cur(...args)
          timer = 0
        }, duration)
      }
    }
    return acc
  }, {} as Record<string, (...args: any[]) => any>)
}
