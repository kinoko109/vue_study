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
    autoLogin({commit, dispatch}) {
        const idToken = localStorage.getItem("idToken");
        if (!idToken) return;
        const now = new Date();
        const expiryTimeMs = localStorage.getItem("expiryTimeMs");
        // 有効期限が切れているかのフラグ
        const isExpired = now.getTime() >= expiryTimeMs;
        const refreshToken = localStorage.getItem("refreshToken");
        if (isExpired) {
            dispatch("refreshIdToken", refreshToken);
        } else {
            const expiresInMs = expiryTimeMs - now.getTime();
            setTimeout(() => {
                dispatch("refreshIdToken", refreshToken)
            }, expiresInMs);
            commit("updateIdToken", idToken);
        }
    },
    login({dispatch}, authData) {
        axiosForLogin.post(`/accounts:signInWithPassword?key=${process.env.VUE_APP_API_KEY}`,
            {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            }
        ).then(response => {
            dispatch("setAuthData", {
                idToken: response.data.idToken,
                expiresIn: response.data.expiresIn,
                refreshToken: response.data.refreshToken,
            })
            router.push("/");
        })
    },
    refreshIdToken({commit, dispatch}, refreshToken) {
        axiosRefresh.post(`/token?key=${process.env.VUE_APP_API_KEY}`, {
            grant_type: "refresh_token",
            refresh_token: refreshToken,
        }).then(response => {
            dispatch("setAuthData", {
                idToken: response.data.id_token,
                expiresIn: response.data.expires_in,
                refreshToken: response.data.refresh_token,
            })
            setTimeout(() => {
                dispatch("refreshIdToken", response.data.refresh_token);
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
            dispatch("setAuthData", {
                idToken: response.data.idToken,
                expiresIn: response.data.expiresIn,
                refreshToken: response.data.refreshToken,
            })
            console.log(response);
            router.push("/");
        })
    },
    setAuthData({commit, dispatch}, authData) {
        const now = new Date();
        // 有効期限が切れるタイミングを取得（今 + 3600秒）
        const expiryTimeMes = now.getTime() + authData.expiresIn * 1000;
        commit("updateIdToken", authData.idToken);
        localStorage.setItem("idToken", authData.idToken);
        localStorage.setItem("expiryTimeMs", authData.expiryTimeMes);
        localStorage.setItem("refreshToken", authData.refreshToken);
        // console.log(response);
        setTimeout(() => {
            dispatch("refreshIdToken", authData.refreshToken)
        }, authData.expiresIn * 1000);
    },
    logout({commit}) {
        commit("updateIdToken", null);
        localStorage.removeItem("idToken");
        localStorage.removeItem("expiryTImeMs");
        localStorage.removeItem("refreshToken");
        router.replace("/login");
    }

}

export default {
    state,
    getters,
    mutations,
    actions,
}
