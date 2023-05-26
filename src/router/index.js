import { createRouter, createWebHashHistory} from "vue-router";

import HomeVue from '@/views/Home.vue';

const router = createRouter({
    
    history: createWebHashHistory(),
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: HomeVue
        }
    ]
})

export default router