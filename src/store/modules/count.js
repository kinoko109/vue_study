const state = {
    count: 0
}

const getters = {
    counter: state => state.count
}

const mutations = {
    increment(state, number) {
        state.count += number;
    },
    decrement(state, number) {
        state.count -= number;
    }
}

const actions = {
    increment(context, number) {
        context.commit("increment", number);
    },
    decrement(context, number) {
        context.commit("decrement", number);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
