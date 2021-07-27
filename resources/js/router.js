import Vue from "vue";

import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: () => import("./views/home/index.vue")
        },
        {
            path: "/login",
            component: () => import("./views/login/index.vue")
        },
        {
            path: "/register",
            component: () => import("./views/register/index.vue")
        },
        {
            path: "/forgot-password",
            component: () => import("./views/forgot/index.vue")
        },
        {
            path: "/reset/:token",
            component: () => import("./views/reset/index.vue")
        }
    ]
});
