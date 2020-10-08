import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    select: {
      items: [],
    },
  },
  mutations: {
    getCode(state, payload) {
      state.select.items = payload;
    },
  },
  actions: {
    getCode({ commit }, payload) {
      axios.get("").then((response) => {
        commit("getCode", response.data);
      });
    },
  },
  modules: {},
});
