<script>
import { PostItem } from "@/components";

export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
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
      <li v-for="post in this.posts" :key="post.id">
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
