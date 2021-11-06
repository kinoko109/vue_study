import Vue from 'vue'
import App from './App.vue'
import store from "@/store";
import axios from "axios";
import router from "@/router";

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-axios-23bc6/databases/(default)/documents"
// axios.defaults.headers.common["Authorization"] = "common";
// axios.defaults.headers.get["Authorization"] = "get";

// interceptorsは複数設定できる
// リクエストする前になにか処理をしたい
// id: 0
axios.interceptors.request.use(
    config => {
        console.log("interceptors request", config);
        return config;
    },
    error => {
        console.log("interceptors request", error);
        return Promise.reject(error);
    }
)

// id: 1
axios.interceptors.request.use(
    config => {
        console.log("interceptors request", config);
        return config;
    },
    error => {
        console.log("interceptors request", error);
        return Promise.reject(error);
    }
)

// レスポンスを受ける前になにか処理をしたい
axios.interceptors.response.use(
    config => {
        console.log("interceptors response", config);
        return config;
    },
    error => {
        console.log("interceptors response", error);
        return Promise.reject(error);
    }
)

// 指定したidのinterceptorsを取り消す
axios.interceptors.request.eject(0)

new Vue({
    router,
    render: h => h(App),
    store,
}).$mount('#app')
