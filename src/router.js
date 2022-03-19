import {createRouter,createWebHistory} from 'vue-router'
import Home from './views/home.vue';
import PDP from './views/pdp.vue';
import PLP from './views/plp.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: PDP },
    { path: '/category/:category', component: PLP },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;