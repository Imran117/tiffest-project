import { createRouter, createWebHistory } from "vue-router";

import HomeVue from '@/views/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: HomeVue
        }
    ]
})

export default router