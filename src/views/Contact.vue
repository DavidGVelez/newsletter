<script>
import { ContactForm } from "@/components/forms";
export default {
  components: { ContactForm },
  props: {},
};
</script>
<template>
  <main>
    <section id="contact-page">
      <h1>Contact Us</h1>
      <ContactForm></ContactForm>
    </section>
  </main>
</template>
<style lang="scss" scoped>
#contact-page {
  width: 50%;
  margin: auto;
  @include respond-below(sm) {
    width: 100%;
  }
  @include respond-below(md) {
    width: 75%;
  }

  text-align: left;
  & h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }
}
</style>
