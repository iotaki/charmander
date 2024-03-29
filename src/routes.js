import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Funtions from './views/nav1/Funtions.vue'
import Beans from './views/nav1/Beans.vue'
import Routes from './views/nav1/Routes.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: 'Develop',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '', hidden: true },
            { path: '/routes', component: Routes, name: 'Routes' },
            { path: '/functions', component: Funtions, name: 'Funtions' },
            { path: '/beans', component: Beans, name: 'Beans' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Performance',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: 'Performance1' },
            { path: '/page5', component: Page5, name: 'Performance' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: 'Statistic' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;