import { createWebHistory, createRouter } from "vue-router";
import Home from '@/Views/HomePage';
import NotFound from "@/Views/NotFound";
import About from "@/Views/About";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
];

const router = new createRouter({
    history: createWebHistory("/Github-Browser"),
    routes,
});


export default router;