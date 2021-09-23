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

<style lang="scss">
main {
  width: 90%;
  margin-top: $main-height;
  margin-bottom: $main-height;
}
</style>
