<script>
import { PostList } from "@/components";

export default {
  name: "Home",
  components: {
    PostList,
  },
  data() {
    return {
      postList: {},
      postsLoading: false,
    };
  },
  mounted() {
    this.postsLoading = !this.postsLoading;
    this.postsLoading = !this.postsLoading;
  },
};
</script>

<template>
  <main>
    <h2 v-if="this.postsLoading">Loading</h2>
    <PostList :posts="this.$store.state.posts.posts" v-else></PostList>
  </main>
</template>

<style lang="scss"></style>
