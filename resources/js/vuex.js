import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const state = {
    user: null
};

const store = new Vuex.Store({
    state,
    getters: {
        user: (state) => {
            return state.user;
        }
    },
    actions: {
        user: (context, user) => {
            context.commit('user', user);
        }
    },
    mutations: {
        user: (state, user) => {
            state.user = user;
        }
    },
    plugins: [createPersistedState()]
});

export default store;
