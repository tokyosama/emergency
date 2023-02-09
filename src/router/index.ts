import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw>=[
    {
        path:'/',
        redirect:'/Login'
    },
    {
        path: '/Login',
        name: 'Login',
        component: ()=>import('@/view/Login/Login.vue')
    },
    {
        path: '/Redirect',
        name: 'Redirect',
        redirect:'/Redirect/Monitor',
        component: ()=>import('@/view/Content/Redirect/Redirect.vue'),
        children:[
            {
                path: 'Monitor',
                name: 'Monitor',
                component: ()=>import('@/view/Content/Monitor/Monitor.vue')
            },
            {
                path: 'Urgent',
                name: 'Urgent',
                component: ()=>import('@/view/Content/Urgent/Urgent.vue')
            },
            {
                path: 'Info',
                name: 'Info',
                component: ()=>import('@/view/Content/Info/Info.vue')
            },

        ]
    },


]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router