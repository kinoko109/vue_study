<template>
  <div>
    <h2>ログイン</h2>
    <label for="email">Email：</label>
    <input id="email" v-model="email" type="text"/>
    <br><br>
    <label for="password">パスワード：</label>
    <input id="password" v-model="comment" type="text" />
    <br>
    <button @click="login">ログイン</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    login() {

    }
  }
}
</script>

<style>
</style>
