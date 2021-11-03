<template>
    <div class="Home" v-border:solid.round="{ width: '10px', color: 'brown' }">
        Home
    </div>
</template>

<script>
    export default {
        name: 'Home',
      directives: {
          border(el, binding) {
            el.style.border = "1px solid tomato";
            el.style.borderWidth = binding.value.width;
            el.style.borderColor = binding.value.color;
            el.style.borderStyle = binding.arg;
            if(binding.modifiers.round) {
              console.log("roundあり");
              el.style.borderRadius = "0.5em";
            }
          }
      }
    };
</script>
