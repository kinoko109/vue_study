<template>
  <div>
    <p>いいね{{ halfNumber }}</p>
    <button type="button" @click="increment">＋１</button>
  </div>
</template>

<script>
export default {
  name: 'Likenumber',
  // props: ["totalNumber"],
  props: {
    totalNumber: {
      type: Number,
      // required: true,
      default: 10
    },
  },
  methods: {
    increment() {
      this.$emit("my-click", this.totalNumber + 1);
    }
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  }
};
</script>
