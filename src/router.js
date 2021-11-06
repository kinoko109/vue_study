import Vue from "vue";
import Router from "vue-router";
import Register from "@/views/Register/Register";
import Login from "@/views/Login/Login";
import Comments from "@/views/Comments/Comments";
import store from "./store"

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Comments,
            beforeEnter(to, from, next) {
                if(store.getters.idToken) {
                    next();
                } else {
                    next("/login");
                }
            }
        },
        {
            path: "/register",
            component: Register,
            beforeEnter(to, from, next) {
                if(store.getters.idToken) {
                    next("/");
                } else {
                    next();
                }
            }
        },
        {
            path: "/login",
            component: Login,
            beforeEnter(to, from, next) {
                if(store.getters.idToken) {
                    next("/");
                } else {
                    next();
                }
            }
        },
    ]
});
