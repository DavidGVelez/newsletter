<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<template>
  <footer>
    <div class="content">
      ©
      <a href="https://www.davidgavilanes.com" target="_blank" rel="nofollow">
        David Gavilanes </a
      >{{ currentYear }}
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: 20px;
  color: map-get($gray, "200");
  background-color: map-get($gray, "700");
  & .content {
    max-width: $width-container;
    margin: auto;
    & a {
      text-decoration: none;
      color: inherit;

      &:hover {
        color: map-get($gray, "400");
      }
    }
  }
}
</style>
