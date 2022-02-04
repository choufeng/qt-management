import { router } from './router'
import Antd from 'ant-design-vue'
import { App } from 'vue'
import { store, key } from './store'

export default {
  install(vue: App) {
    vue.use(router)
    vue.use(store, key)
    vue.use(Antd)
  },
}
