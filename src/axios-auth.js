import axios from "axios";

// 新しいaxiosを用意する
const instance = axios.create({
    baseURL: "https://identitytoolkit.googleapis.com/v1"
})

// instance.defaults.headers.common = "common";

export default instance;
