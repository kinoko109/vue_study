import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: { // storeのcomputedのようなもの
        doubleCounter: state => state.count * 2
    },
    mutations: { // ここでのみstateの値を変えるようにする（他でもできるが可読性を考慮して）
        increment(state, number) {
            state.count += number;
        },
        decrement(state, number) {
            state.count -= number;
        }
    },
    actions: {
        increment(context, number) {
            context.commit("increment", number);
        },
        decrement(context, number) {
            context.commit("decrement", number);
        }
    }
})
