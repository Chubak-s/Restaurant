import { createRouter, createWebHistory } from 'vue-router';
import vFooter from '../components/footer.vue'
import vHeader from '../components/header.vue'
import vLanding from '../components/ladning.vue'
import vMenu from '../components/menu.vue'
const routes = [
    {
        path: '/Restaurant',
        components: {
            default: vLanding,
            vHeader,
            vFooter,
        }
    },
    {
        path: '/Restaurant/menu',
        components: {
            default: vMenu,
            vHeader,
            vFooter,
        }
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;