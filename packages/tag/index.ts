import { App } from 'vue'
import VxeTagComponent from './src/tag'
import VxeTagsComponent from './src/tags'
import { dynamicApp } from '../dynamics'

export const VxeTag = Object.assign(VxeTagComponent, {
  install (app: App) {
    app.component(VxeTagComponent.name, VxeTagComponent)
  }
})
export const VxeTags = Object.assign(VxeTagsComponent, {
  install (app: App) {
    app.component(VxeTagsComponent.name, VxeTagsComponent)
  }
})
export const Tag = VxeTag
export const Tags = VxeTags

dynamicApp.component(VxeTagComponent.name, VxeTagComponent)
dynamicApp.component(VxeTagsComponent.name, VxeTagsComponent)

export default VxeTag
