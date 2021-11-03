<template>
  <div id="app">
    <LikeHeader>
      <!--      <h1>トータルのいいね</h1>-->
      <template v-slot:otherData>
        指定したslotに適用
      </template>
    </LikeHeader>
    <h2>{{ number }}</h2>
    <LikeNumber :total-number="number" @my-click="number = $event"/>
    <LikeNumber :total-number="number"/>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>フォーム</h2>
      <label for="title">タイトル</label>
<!--      <input type="text" id="title" v-model="eventData.title">-->
      <input type="text" id="title" v-model.lazy="eventData.title">
      <p>{{ eventData.title }}</p>
    </div>
    <h2>vuex</h2>
    <p>カウント{{ doubleCount }}</p>
    <button @click="increment">プラス</button>
    <button @click="decrement">マイナス</button>
  </div>
</template>

<script>
import LikeNumber from "@/components/LikeNumber/LikeNumber";
import LikeHeader from "@/components/LikeHeader/LikeHeader";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";

export default {
  name: 'App',
  components: {
    LikeNumber,
    LikeHeader,
    Home,
    About
  },
  data() {
    return {
      number: 10,
      currentComponent: "Home",
      eventData: {
        title: "タイトルです"
      }
    }
  },
  computed: {
    doubleCount() {
      return this.$store.getters.doubleCounter
    }
  },
  methods: {
    increment() {
      this.$store.state.count++;
    },
    decrement() {
      this.$store.state.count--;
    }
  }
}
</script>

<style>
</style>
