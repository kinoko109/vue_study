<template>
  <div id="app">
    <header>
      <template v-if="isAuthenticated">
        <router-link class="header-item" to="/">掲示板</router-link>
      </template>
      <template v-if="!isAuthenticated">
        <router-link class="header-item" to="/login">ログイン</router-link>
        <router-link class="header-item" to="/register">登録</router-link>
      </template>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.idToken !== null;
    }
  }
}
</script>

<style scoped>
.header-item {
  padding: 10px;
}
</style>
