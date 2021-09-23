<script>
// @ is an alias to /src
import { PostList } from "@/components";

export default {
  name: "Home",
  components: {
    PostList,
  },
};
</script>

<template>
  <main>
    <PostList></PostList>
  </main>
</template>

<style lang="scss"></style>
