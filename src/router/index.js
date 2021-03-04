import Vue from 'vue'
import VueRouter from 'vue-router'
import welcome from '../components/welcome.vue'
import Login from '../components/Login.vue'
import Home from '../components/pageSelector/Home.vue'
import management from '../components/pageSelector/Management.vue'
import IntegrQuery from '../components/Management/IntegrQuery.vue'
// 土地管理
import landInformation from '../components/Management/land/landInformation.vue'
import landInquiry from '../components/Management/land/landInquiry.vue'
import landsDetails from '../components/Management/land/landsDetails.vue'
import landSummary from '../components/Management/land/landSummary.vue'

// 公用房管理
import roomsInformation from '../components/Management/commonRoom/roomsInformation.vue'
import roomInquire from '../components/Management/commonRoom/roomInquire.vue'
import roomsDetails from '../components/Management/commonRoom/roomsDetails.vue'
import application from '../components/Management/commonRoom/application.vue'
import roomSummary from '../components/Management/commonRoom/roomSummary.vue'

// 住房管理
import houseInformation from '../components/Management/house/houseInformation.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    // 用户界面
    {
        path: '/home',
        component: Home,
    },
    // 管理员界面
    {
        path: '/management',
        component: management,
        redirect: '/welcome',
        children: [
            { path: '/welcome', component: welcome },
            // 综合查询
            { path: '/management/IntegrQuery', component: IntegrQuery },
            // 土地管理
            { path: '/management/land/landInformation', component: landInformation },
            { path: '/management/land/landInquiry', component: landInquiry },
            { path: '/management/land/landsDetails/:id', component: landsDetails, props: true },
            { path: '/management/land/landSummary', component: landSummary },
            // 公用房管理
            { path: '/management/commonRoom/roomsInformation', component: roomsInformation },
            { path: '/management/commonRoom/roomInquire', component: roomInquire },
            { path: '/management/commonRoom/roomsDetails/:id', component: roomsDetails, props: true },
            { path: '/management/commonRoom/application', component: application },
            { path: '/management/commonRoom/roomSummary', component: roomSummary },
            // 住房管理
            { path: '/management/house/houseInformation', component: houseInformation }
        ]
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