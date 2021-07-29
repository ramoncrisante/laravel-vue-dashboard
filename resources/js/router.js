import Vue from "vue";

import Router from "vue-router";
import store from "./vuex";

Vue.use(Router);

let router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            meta: {
                requiresAuth: true
            },
            component: () => import("./views/home/index.vue")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("./views/login/index.vue")
        },
        {
            path: "/register",
            name: "register",
            component: () => import("./views/register/index.vue")
        },
        {
            path: "/forgot-password",
            name: "forgot",
            component: () => import("./views/forgot/index.vue")
        },
        {
            path: "/reset/:token",
            name: "reset",
            component: () => import("./views/reset/index.vue")
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        console.log(store.getters.user);
        if (store.getters.user) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

export default router;
