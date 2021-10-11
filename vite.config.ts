import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.join(__dirname, './src'),
            '@views': path.join(__dirname, './src/views'),
            '@components': path.join(__dirname, './src/components'),
            '@utils': path.join(__dirname, './src/utils'),
        },
    },
    server: {
        // cors: true,
        // open: true,
        host: '0.0.0.0',
        https: true,
        proxy: {
            '/txapi': {
                target: 'http://api.tianapi.com',
                changeOrigin: true,
            },
            '/recommend_api': {
                target: 'https://api.juejin.cn',
                changeOrigin: true,

            }
        },
    },
})
