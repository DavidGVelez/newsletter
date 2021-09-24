<script>
import { InputForm } from "@/components/forms";
import { BaseButton } from "@/components";
export default {
  name: "AddPostForm",
  components: { InputForm, BaseButton },
  data() {
    return {
      title: "",
      body: "",
      type: "",
      min_body_chars: 3,
      required_fields: ["title", "body", "type"],
      errors: {},
    };
  },
  methods: {
    validateForm(e) {
      // --- Stop button from triggering form submit
      e.preventDefault();

      this.errors = {};

      this.required_fields.forEach((element) => {
        if (!this[element]) {
          this.errors = {
            ...this.errors,
            [element]: {
              text: "The field " + element + " is required",
            },
          };
        }
      });

      if (Object.keys(this.errors).length == 0) {
        this.submitForm();
      }
    },
    submitForm() {},
    isRequired(name) {
      return this.required_fields.includes(name);
    },
  },
};
</script>

<template>
  <form id="add_post_form" method="POST" @submit="submitForm" novalidate="true">
    <div class="form-wrapper">
      <InputForm
        v-model="title"
        input_name="title"
        type="text"
        counter="50"
        label="Title"
        :required="isRequired('title')"
        :error="errors.title"
      />
      <select v-model="type">
        <option value="brand/php">PHP</option>
        <option value="brand/js">Javascript</option>
        <option value="brand/vuejs">Vuejs</option>
        <option value="briefcase">Others</option>
      </select>
      <wysiwyg v-model="body" />
    </div>
    <p class="required-text-description">
      The fields marked with <span class="required-symbol">*</span> are
      mandatory
    </p>
    <div class="button-wrapper">
      <BaseButton
        title="Send"
        type="submit"
        @click="validateForm"
        :disabled="false"
      />
    </div>
  </form>
</template>

<style lang="scss">
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
.form-wrapper {
  margin-bottom: 10px;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
}

.button-wrapper {
  display: flex;
  justify-content: flex-end;
}

.required-text-description {
  font-size: 0.9rem;

  & .required-symbol {
    color: map-get($red, "600");
  }
}
</style>
