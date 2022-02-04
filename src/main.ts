import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'

import plugins from './plugins'

createApp(App).use(plugins).mount('#app')
