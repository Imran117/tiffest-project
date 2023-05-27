import { createRouter, createWebHashHistory} from "vue-router";

import HomeVue from '@/views/Home.vue';

const router = createRouter({
    
    history: createWebHashHistory(),
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: HomeVue
        },
        {
            path: '/Tiffest',
            component: () => import('@/views/Tiffest.vue')
        },
        {
            path: '/Program',
            component: () => import('@/views/Program.vue')
        },
        {
            path: '/Movie-show',
            component: () => import('@/views/Movie-show.vue')
        },
        {
            path: '/Location',
            component: () => import('@/views/Location.vue')
        },
        {
            path: '/Premiers',
            component: () => import('@/views/Premiers.vue')
        },
        {
            path: '/Faces',
            component: () => import('@/views/Faces.vue')
        },
        {
            path: '/Media',
            component: () => import('@/views/Media.vue')
        },
        {
            path: '/History',
            component: () => import('@/views/History.vue')
        },
        {
            path: '/Master-classes',
            component: () => import('@/views/Master-classes.vue')
        },
        {
            path: '/News',
            component: () => import('@/views/News.vue')
        },
    ],
    scrollBehavior (to, from, savedPosition) {
        return {
            top: 10
        }
      }
})

export default router