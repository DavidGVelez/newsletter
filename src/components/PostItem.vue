<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  methods: {
    getUrl() {
      return "/post/" + this.data.slug;
    },
    color() {
      return (
        this.data.type.split("brands/")[1] ?? this.data.type.split("brands/")[0]
      );
    },
  },
};
</script>

<template>
  <article class="post">
    <router-link data="test" class="post_content" :to="'/post/' + data.slug">
      <v-icon :name="data.type" scale="2" :class="color()" />
      <div class="post_info">
        <h3 class="post_title">{{ data.title }}</h3>
        <div class="time">
          <time>{{ data.created_at }}</time>
        </div>
      </div>
    </router-link>
  </article>
</template>

<style scoped lang="scss">
.post {
  & .post_content {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    text-decoration: none;
    color: $clr-text;

    & svg {
      width: 25px;
    }

    &:hover {
      & svg.js {
        color: $js;
      }
      & svg.php {
        color: $php;
      }
      & svg.vuejs {
        color: $vuejs;
      }
      & svg.briefcase {
        color: $briefcase;
      }
      & .post_info {
        color: map-get($gray, "900");
      }
    }

    .post_info {
      padding: 10px;
      text-decoration: none;
      color: $clr-text;

      &:last-child() {
        margin-bottom: 0;
      }

      display: flex;
      flex-direction: column;
      text-align: left;
      min-width: 200px;

      & .post_title {
        font-size: 20px;
        margin-bottom: 0.5rem;
      }

      & .time {
        font-size: 12px;
      }
    }
  }
}
</style>
