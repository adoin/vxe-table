import { App } from 'vue'
import VxeCardComponent from './src/card'
import { dynamicApp } from '../dynamics'

export const VxeCard = Object.assign(VxeCardComponent, {
  install (app: App) {
    app.component(VxeCardComponent.name, VxeCardComponent)
  }
})

export const Card = VxeCard

dynamicApp.component(VxeCardComponent.name, VxeCardComponent)

export default VxeCard
