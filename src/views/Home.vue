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
  <div class="home">
    <PostList></PostList>
  </div>
</template>
