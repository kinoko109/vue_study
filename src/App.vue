<template>
  <div id="app">
    <LikeHeader />
    <h2>{{ number }}</h2>
    <LikeNumber :total-number="number" @my-click="number = $event" />
    <LikeNumber :total-number="number" />
  </div>
</template>

<script>
import LikeNumber from "@/components/LikeNumber/LikeNumber";
import LikeHeader from "@/components/LikeHeader/LikeHeader";

export default {
  name: 'App',
  components: {
    LikeNumber,
    LikeHeader,
  },
  data() {
    return {
      number: 10,
    }
  }
}
</script>

<style>
</style>
