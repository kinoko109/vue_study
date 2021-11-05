import Vue from 'vue'
import App from './App.vue'
import store from "@/store";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-axios-23bc6/databases/(default)/documents"
// axios.defaults.headers.common["Authorization"] = "common";
// axios.defaults.headers.get["Authorization"] = "get";

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
