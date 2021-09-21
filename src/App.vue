<script>
import { AppHeader, AppFooter } from "@/components/layout";

export default {
  components: { AppHeader, AppFooter },
};
</script>

<template>
  <div id="app">
    <AppHeader></AppHeader>
    <main>
      <router-view />
    </main>
    <AppFooter></AppFooter>
  </div>
</template>

<style lang="scss">
#app {
  min-height: 100vh;
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: $clr-text;
  margin: 0 !important;
}
main {
  flex-grow: 1;
  max-width: $width-container;
  margin: auto;
}
</style>
