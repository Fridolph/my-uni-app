import { defineConfig } from 'vite'
import postcssConfig from './postcss.config'
import uni from '@dcloudio/vite-plugin-uni'
import uvtw from '@uni-helper/vite-plugin-uni-tailwind'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: postcssConfig,
  },
  plugins: [uni(), uvtw()],
  // 配置环境变量
  // define: {
  //   'process.env.VUE_APP_TEST': JSON.stringify('dev'),
  // },
  // 发布时删除 console
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
})
