<script>
export default {
  name: "AppHeader",

  data() {
    return {
      isMobile: true,
      menuIsHidden: true,
      menuIsOpen: false,
    };
  },

  computed: {
    getCurrentLocale() {
      return this.locales.find(
        (element) => element.locale == this.$i18n.locale
      );
    },
  },

  methods: {
    checkIfMobileWidth() {
      this.isMobile = window.innerWidth < 1100;
    },
    openMenu() {
      this.menuIsOpen = true;
      this.menuIsHidden = false;
      setTimeout(() => document.body.classList.add("header-is-open"), 10);
    },
    closeMenu() {
      this.menuIsOpen = false;
      document.body.classList.remove("header-is-open");
      setTimeout(() => (this.menuIsHidden = true), 200);
    },
  },

  created() {
    this.checkIfMobileWidth();
    window.addEventListener("resize", this.checkIfMobileWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.checkIfMobileWidth);
  },
};
</script>

<template>
  <header id="app_header">
    <nav class="container nav" role="navigation">
      <router-link to="/">
        <h1 class="title">Newsletter</h1>
      </router-link>
      <div id="header_navigation" @keydown.esc="closeMenu">
        <button
          id="open_menu"
          class="toggle-mobile-menu"
          v-if="isMobile"
          @click="openMenu"
          role="presentation"
          title="Abrir menú"
          aria-label="Abrir menú"
        >
          <v-icon name="bars"></v-icon>
        </button>
        <div
          class="header-navigation-wrapper"
          :class="isMobile && menuIsHidden ? 'menu-is-hidden' : ''"
          :aria-expanded="menuIsOpen ? 'true' : 'false'"
        >
          <button
            id="close_menu"
            class="toggle-mobile-menu"
            v-if="isMobile"
            @click="closeMenu"
            role="presentation"
            title="Cerrar menú"
            aria-label="Cerrar menú"
          >
            <v-icon name="times"></v-icon>
          </button>
          <div class="header-navigation-inner">
            <ul>
              <li class="menu-item">
                <router-link to="test">test</router-link>
              </li>
              <li class="menu-item">
                <router-link to="test1">test</router-link>
              </li>
              <li class="menu-item">
                <router-link to="test2">test</router-link>
              </li>
              <li class="menu-item">
                <router-link to="test3">test</router-link>
              </li>
              <li class="menu-item">
                <router-link to="test4">test</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div
      id="header_backdrop"
      v-if="isMobile"
      :class="menuIsOpen && 'active'"
      @click="closeMenu"
    ></div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  z-index: 10000;
  height: 70px;
  width: 100vw;
  background-color: $white;
}
.nav {
  max-width: map-get($breakpoints, "header");
}
#app_header .container,
#header_navigation,
.header-navigation-wrapper,
.header-navigation-inner,
.header-navigation-inner > ul,
.menu-item,
.menu-item a {
  height: 100%;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  @include respond-below(header) {
    width: 100%;
  }
  @include respond-below(md) {
    width: 90%;
  }
}

h1 {
  font-size: 30px;
}

a {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: $black;
}

.menu-item a {
  padding: 15px;
  background-color: transparent;
  border: none;
  color: $white;
  font-size: 1.1rem;
  text-decoration: none;
  cursor: pointer;
  &.router-link-exact-active {
    // background-color: map-get($gray, "100");
    text-decoration: underline;
  }
  @include respond-above(header) {
    padding: 0 15px;
    color: $clr-text;
    font-size: 1rem;
  }

  // Mouse effects

  @include supports-hover() {
    background-color: map-get($gray, "200");

    @include respond-above(header) {
      background-color: map-get($gray, "300");
    }
  }

  &:focus {
    background-color: map-get($gray, "200");

    @include respond-above(header) {
      background-color: map-get($gray, "300");
    }
  }

  &:active {
    background-color: map-get($gray, "700");

    @include respond-above(header) {
      background-color: map-get($gray, "100");
    }
  }
}

#header_navigation {
  display: flex;
  align-items: center;

  & .header-navigation-wrapper li,
  & .header-navigation-wrapper a {
    position: relative;
    display: flex;
    align-items: center;

    @include respond-below(header) {
      justify-content: center;
      height: auto !important;
      width: 100%;
    }
  }

  & .has-icon-left .icon {
    margin-right: 5px;
  }
}

.header-navigation-wrapper {
  & svg {
    color: white;
  }
  @include respond-below(header) {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 100vw;
    max-width: 414px;
    background-color: map-get($gray, "600");
    z-index: 1000000000;
    pointer-events: none;
    transition: right 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    // Hide scrollbar on Safari and Chrome
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @include respond-below-height(sm) {
    max-width: 100%;
  }

  &.menu-is-hidden {
    display: none;
  }

  .header-is-open & {
    @include respond-below(header) {
      right: 0;
      @include box-shadow(6);
      pointer-events: all;
    }
  }
}

.header-navigation-inner {
  // Make the menu scrollable on mobile
  @include respond-below(header) {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

  & > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @include respond-below(header) {
      flex-direction: column;
      justify-content: center;
      height: auto;
      min-height: 100vh;
      padding: 50px 0;
    }
  }
}

// --- Toggle mobile menu
.toggle-mobile-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  background-color: transparent;
  border: none;
  color: $clr-text;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  -webkit-appearance: none;

  @include respond-above(header) {
    display: none !important; // make disappear the icons on desktop
  }

  // Mouse effects

  @include supports-hover() {
    background-color: map-get($gray, "100");
    color: blue;
  }

  &:focus {
    background-color: map-get($gray, "100");
    color: $clr-text;
  }

  &:active {
    background-color: map-get($gray, "100");
  }
}

#close_menu {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  font-size: 22px;
  color: $clr-text !important;
}

// --- Backdrop
#header_backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: white;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;

  &.active {
    @include respond-below(header) {
      opacity: 1;
      pointer-events: all;
    }
  }
}
</style>
