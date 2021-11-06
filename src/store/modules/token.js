import axiosForLogin from "@/axios-auth";
import axiosRefresh from "@/axios-refresh"
import router from "@/router";

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
    login({commit, dispatch}, authData) {
        axiosForLogin.post(`/accounts:signInWithPassword?key=${process.env.VUE_APP_API_KEY}`,
            {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            }
        ).then(response => {
            commit("updateIdToken", response.data.idToken);
            console.log(response);
            setTimeout(() => {
                dispatch("refreshIdToken", response.data.refreshToken)
            }, response.data.expiresIn * 1000);
            router.push("/");
        })
    },
    refreshIdToken({commit, dispatch}, refreshToken) {
        axiosRefresh.post(`/token?key=${process.env.VUE_APP_API_KEY}`, {
            grant_type: "refresh_token",
            refresh_token: refreshToken,
        }).then(response => {
            commit("updateIdToken", response.data.id_token);
            setTimeout(() => {
                dispatch("refreshIdToken", response.data.refrresh_token);
            }, response.data.expiresIn * 1000)
        });
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
            router.push("/");
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}
