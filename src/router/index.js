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
        }
    ]
})

export default router