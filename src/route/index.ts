import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import Blog from '../views/blog/blog.vue'
import BHome from '../views/blog/b-home.vue'
import BList from '../views/blog/b-list.vue'
import BDetail from '../views/blog/b-detail.vue'
import Logs from '../views/logs/index.vue'
import { key, store } from '@/store'
import { useStore } from 'vuex'
import { LogsData } from '@/store/modules/logs'
import moment from 'moment'
import { guid } from '@/utils/common'
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {
        path: '/', component: Home, meta: {
            name: "首页"
        }
    },
    {
        path: '/blog',
        component: Blog,

        children: [
            {
                path: 'home', component: BHome, meta: {
                    name: "博文首页"
                },
            },
            {
                path: 'list/:id', component: BList, props: true, meta: {
                    name: "博文列表"
                },
            },
            {
                path: 'detail', component: BDetail, meta: {
                    name: "博文详情"
                },
            },
            { path: '', component: BHome, redirect: "/blog/home" }
        ],
    }, {
        path: '/logs', component: Logs, meta: {
            name: "日志列表"
        }
    },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
export const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

// 全局进入
router.beforeEach((to, from, next) => {
    if (to.meta.name) {
        let data: LogsData = {
            id: guid(),
            name: "进入" + to.meta.name,
            createTime: moment().format('YYYY-MM-DD HH:mm:ss')
        }
        store.commit("logs/addLog", data); //存储
        console.log("进入" + to.meta.name)
    }
    return next()
})

// 全局离开
router.afterEach((to, from, failure) => {
    if (from.meta.name) {
        let data: LogsData = {
            id: guid(),
            name: "离开" + from.meta.name,
            createTime: moment().format('YYYY-MM-DD HH:mm:ss')
        }
        store.commit("logs/addLog", data); //存储
        console.log("离开" + from.meta.name)
    }
})