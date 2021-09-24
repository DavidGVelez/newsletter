<script>
import { PostList } from "@/components";

export default {
  name: "Home",
  components: {
    PostList,
  },
  data() {
    return {
      postsLoading: false,
    };
  },

  methods: {
    async fetchPosts() {
      try {
        await this.$store.dispatch("posts/getPosts");
      } catch (e) {
        return;
      }
    },
  },
  computed: {
    postsLists() {
      return this.$store.state.posts.posts;
    },
  },
  mounted() {
    this.postsLoading = !this.postsLoading;
    this.fetchPosts();
    this.postsLoading = !this.postsLoading;
  },
};
</script>

<template>
  <main>
    <h2 v-if="this.postsLoading">Loading</h2>
    <PostList :posts="postsLists" v-else></PostList>
  </main>
</template>

<style lang="scss"></style>
