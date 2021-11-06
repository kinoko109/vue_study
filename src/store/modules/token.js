import axiosForLogin from "@/axios-auth";

const state = {
    idToken: null
};

const mutations = {
    updateIdToken(state, idToken) {
        state.idToken = idToken;
    }
}

const getters = {
    idToken: state => state.idToken
}

const actions = {
    login({commit}, authData) {
        axiosForLogin.post(`/accounts:signInWithPassword?key=${process.env.VUE_APP_API_KEY}`,
            {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            }
        ).then(response => {
            commit("updateIdToken", response.data.idToken);
            console.log(response);
        })
    },
    register({commit}, authData) {
        axiosForLogin.post(`/accounts:signUp?key=${process.env.VUE_APP_API_KEY}`,
            {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            }
        ).then(response => {
            commit("updateIdToken", response.data.idToken);
            console.log(response);
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}
