// import { http } from '@/utils'
import axios from "axios";

const posts = {
  namespaced: true,
  state: () => ({
    posts: [],
    error: null,
  }),
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async getPosts({ commit }) {
      try {
        const response = await axios.get("http://localhost:8080/api/posts");
        console.log(response.data);
        const data = await response.data;

        await commit("setPosts", data);
      } catch (error) {
        await commit("setError", error);

        throw error;
      }
    },
  },
  getters: {
    posts: (state) => state.posts,
    error: (state) => state.error,
  },
};

export { posts };
