import { createSSRApp } from 'vue'
import App from './App.vue'
import * as Pinia from 'pinia'
import './styles/index.css'
// 引入公共 或 业务组件
import Avatar from './components/avatar.vue'
import FixedTabbar from './components/fixed-tabbar/fixed-tabbar.vue'
import Iconfont from './components/iconfont/iconfont.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())

  // 注册业务组件
  app.component('Avatar', Avatar)
  app.component('FixedTabbar', FixedTabbar)
  app.component('Iconfont', Iconfont)

  return {
    app,
    // 此处必须将 Pinia 返回
    Pinia,
  }
}
