<template>
  <div id="app">
    <LikeHeader />
    <LikeNumber />
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
  }
}
</script>

<style>
</style>
