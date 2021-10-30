<template>
  <div>
    <p>いいね{{ number }}</p>
    <button type="button" @click="increment">＋１</button>
  </div>
</template>

<script>
export default {
  name: 'Likenumber',
  data() {
    return {
      number: 5,
    }
  },
  methods: {
    increment() {
      this.number += 1;
    }
  }
};
</script>
