import { Main } from 'element-ui'
import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main.vue'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
        path: '/home',
        component: Home,
        // children: [
        //     {}
        // ]
    }
]

const router = new VueRouter({
    routes
})

// 挂载路由导航守卫  控制路由访问权限
router.beforeEach((to, from, next) => {
    // 从哪里来  到哪里去  next表示放行
    if (to.path === '/login') return next();
    // 获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login');
    next();

})
export default router