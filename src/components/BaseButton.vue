<script>
export default {
  name: "BaseButton",
  props: {
    title: {
      type: String,
      default: () => "",
    },
    disabled: {
      type: Boolean,
    },
    styling: {
      type: String,
      default: () => "primary",
      validator: function (value) {
        return ["primary"].indexOf(value) !== -1;
      },
    },
    buttonType: {
      type: String,
      default: () => "button",
      validator: function (value) {
        return ["button", "link"].indexOf(value) !== -1;
      },
    },
    url: {
      type: String,
      default: () => "",
    },
  },

  mounted() {},

  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<template>
  <a v-if="buttonType === 'link'" :href="url" :class="styling" class="button">
    {{ title }}
  </a>
  <button
    v-else
    @click="handleClick"
    class="button"
    :class="disabled ? 'disabled' : styling"
    :disabled="disabled"
  >
    {{ title }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: inline-block;
  min-width: 110px;
  padding: 12px 16px;
  border: 2px solid;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1.1px;
  line-height: inherit;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
}

.disabled {
  background-color: map-get($gray, "200");
  border-color: map-get($gray, "300");
  color: map-get($gray, "600");
  cursor: not-allowed;
}

.primary {
  background-color: map-get($light-blue, "600");
  border-color: map-get($light-blue, "700");
  color: $white;

  // Mouse effects

  @include supports-hover() {
    background-color: map-get($light-blue, "500");
    border-color: map-get($light-blue, "600");
  }

  &:focus {
    background-color: map-get($light-blue, "500");
    border-color: map-get($light-blue, "600");
  }
}
</style>
