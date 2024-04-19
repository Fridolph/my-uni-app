import { createSSRApp } from 'vue'
import App from './App.vue'
import * as Pinia from 'pinia'
// 引入业务组件
import FixedTabbar from './components/fixed-tabbar.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())

  // 注册业务组件
  app.component('FixedTabbar', FixedTabbar)

  return {
    app,
    Pinia, // 此处必须将 Pinia 返回
  }
}
