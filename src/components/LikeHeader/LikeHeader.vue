<template>
  <div>
    <slot>
      デフォルトタイトル
    </slot>
    <slot name="otherData"></slot>
  </div>
</template>

<script>
    export default {
        props: ["headerText"]
    };
</script>
