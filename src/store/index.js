import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { posts } from './modules'

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    posts
  },
});
