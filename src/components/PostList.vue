<script>
import { PostItem } from "@/components";

export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Test Title",
          created_at: "21/09/2021",
          slug: "test-title",
          type: "brands/js",
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          created_at: "21/09/2021",
          slug: "manejar-arreglos-en-js",
          type: "brands/vuejs",
        },
      ],
    };
  },
  components: {
    PostItem,
  },
};
</script>

<template>
  <section class="post-section">
    <h2>Latest Posts</h2>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id">
        <PostItem :data="post"></PostItem>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.post-section {
  & h2 {
    font-size: 25px;
    text-align: left;
    margin-bottom: 2rem;
    font-weight: bold;
    color: $clr-titles;
  }
}
</style>
