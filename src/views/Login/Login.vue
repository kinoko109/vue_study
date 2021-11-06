<template>
  <div>
    <h2>ログイン</h2>
    <label for="email">Email：</label>
    <input id="email" v-model="email" type="text"/>
    <br><br>
    <label for="password">パスワード：</label>
    <input id="password" v-model="password" type="password"/>
    <br>
    <button @click="login">ログイン</button>
  </div>
</template>

<script>
import axiosForLogin from "../../axios-auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    login() {
      axiosForLogin.post(`/accounts:signInWithPassword?key=${process.env.VUE_APP_API_KEY}`,
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true
          }
      ).then(response => {
        console.log(response);
      })
      this.email = "";
      this.password = "";
    }
  }
}
</script>

<style>
</style>
