<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<template>
  <main id="post_page">
    <article class="post">
      <h1>Test</h1>
      <p>Lorem ipsum</p>
    </article>
  </main>
</template>

<style lang="scss" scoped>
#post_page {
  background-color: gray;

  & .post h1 {
    font-size: 30px;
  }
}
</style>
