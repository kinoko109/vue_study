import axios from "axios";

// 新しいaxiosを用意する
const instance = axios.create({
    baseURL: "https://firestore.googleapis.com/v1/projects/vuejs-axios-23bc6/databases/(default)/documents"
})

instance.defaults.headers.common = "common";

export default instance;
