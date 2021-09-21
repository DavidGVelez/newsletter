<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>

<template>
  <header>
    <nav>
      <router-link class="logo" to="/">Newsletter</router-link>
      <div class="router">
        <router-link class="cta" to="/add-post">Create Post</router-link>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $white;
  max-width: $width-container;
  margin: auto;
  padding: 1rem;

  @include respond-below(header) {
    width: 100%;
  }

  & .logo {
    text-decoration: none;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 1px;
    color: $clr-text;
  }

  & .router {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    flex: 1;
    & a {
      color: $clr-text;
      text-decoration: none;
      padding: 10px;
      margin-right: 20px;

      &:hover {
        color: white;
      }
    }
    & .router-link-exact-active.router-link-active {
      color: white;
    }

    & .cta {
      color: white;
      background-color: map-get($light-blue, "600");
      margin-right: 0;
      border-radius: 10px;

      &:hover {
        color: black;
      }
    }
  }
}
</style>
