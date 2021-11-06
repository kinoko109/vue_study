import Vue from "vue";
import Router from "vue-router";
import Register from "@/views/Register/Register";
import Login from "@/views/Login/Login";
import Comments from "@/views/Comments/Comments";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {path: "/", component: Comments},
        {path: "/register", component: Register},
        {path: "/login", component: Login},
    ]
});
