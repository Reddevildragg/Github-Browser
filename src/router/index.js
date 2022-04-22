import { createWebHistory, createRouter } from "vue-router";
import Home from '../pages/HomePage';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    }
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
});

export default router;