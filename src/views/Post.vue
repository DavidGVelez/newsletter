<script>
export default {
  name: "Post",
  data() {
    return {
      data: "",
    };
  },
  mounted() {
    this.data = this.$store.state.posts.posts.filter((item) => {
      return item.slug == this.$route.params.slug;
    })[0];
  },

  methods: {
    getPostContent() {},
  },
};
</script>
<template>
  <main id="post_page">
    <article class="post">
      <h1>{{ this.data.title }}</h1>
      <p class="post-content" v-html="this.data.body"></p>
    </article>
  </main>
</template>

<style lang="scss" scoped>
#post_page {
  text-align: left;
  & .post h1 {
    font-size: 30px;
  }
  & .post .post-content {
    margin-top: 2rem;
  }
}
</style>
