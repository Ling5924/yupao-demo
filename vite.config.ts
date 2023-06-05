import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
  plugins: [
    vue(),
     Components({
      resolvers: [VantResolver()],
     }),
  ],
  server: {
    https: false, // 是否开启 https
    open: true, // 是否自动在浏览器打开
    port: 3000, // 端口号
    hmr:true, //开启热更新
    host: "0.0.0.0",
  },
})

