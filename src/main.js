import Vue from 'vue'
import App from './App.vue'
import store from "@/store";

Vue.config.productionTip = false
// Vue.directive("border", (el, binding) => {
//   el.style.border = "1px solid tomato";
//   el.style.borderWidth = binding.value.width;
//   el.style.borderColor = binding.value.color;
//   el.style.borderStyle = binding.arg;
//   if(binding.modifiers.round) {
//     console.log("roundあり");
//     el.style.borderRadius = "0.5em";
//   }
// })

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
