import axios from "axios";

// 新しいaxiosを用意する
const instance = axios.create({
    baseURL: "https://securetoken.googleapis.com/v1"
})

export default instance;
