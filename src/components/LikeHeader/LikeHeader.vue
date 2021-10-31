<template>
  <div>
    <slot>
      デフォルトタイトル
    </slot>
  </div>
</template>

<script>
    export default {
        props: ["headerText"]
    };
</script>
