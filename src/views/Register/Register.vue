<template>
  <div>
    <h2>登録</h2>
    <label for="email">Email：</label>
    <input id="email" v-model="email" type="text"/>
    <br><br>
    <label for="password">パスワード：</label>
    <input id="password" v-model="password" type="password"/>
    <br>
    <button @click="register">登録する</button>
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
    register() {
      this.$store.dispatch("register", {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style>
</style>
