import { App } from 'vue'
import VxeTagComponent from './src/tag'
import { dynamicApp } from '../dynamics'

export const VxeTag = Object.assign(VxeTagComponent, {
  install (app: App) {
    app.component(VxeTagComponent.name, VxeTagComponent)
  }
})

export const Tag = VxeTag

dynamicApp.component(VxeTagComponent.name, VxeTagComponent)

export default VxeTag
