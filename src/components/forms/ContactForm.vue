<script>
import { InputForm } from "@/components/forms";
import { BaseButton } from "@/components";
export default {
  name: "FormContact",
  components: { InputForm, BaseButton },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      body: "",
      min_body_chars: 3,
      required_fields: ["name", "email", "subject", "body"],
      errors: {},
    };
  },
  methods: {
    validateForm(e) {
      // --- Stop button from triggering form submit
      e.preventDefault();

      this.errors = {};

      // --- Check email formatting
      if (!this.isValidEmail(this.email)) {
        this.errors = {
          ...this.errors,
          email: {
            text: "The email address must be a valid email address",
          },
        };
      }

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
    submitForm() {
      console.log("Sending email");
    },
    isRequired(name) {
      return this.required_fields.includes(name);
    },
    isValidEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return re.test(email);
    },
  },
};
</script>

<template>
  <form
    id="contact_form"
    method="POST"
    @submit="submitForm"
    ref="contact_form"
    novalidate="true"
  >
    <div class="form-wrapper">
      <InputForm
        v-model="name"
        input_name="name"
        type="text"
        counter="50"
        label="Name"
        :required="isRequired('name')"
        :error="errors.name"
      />

      <InputForm
        v-model="email"
        label="Email Address"
        :error="errors.email"
        input_name="email"
        counter="50"
        type="email"
        :required="isRequired('email')"
      />

      <InputForm
        v-model="subject"
        input_name="subject"
        type="email"
        label="Subject"
        counter="70"
        :required="isRequired('subject')"
        :error="errors.subject"
      />

      <InputForm
        v-model="body"
        input_name="body"
        type="textarea"
        label="Body"
        counter="500"
        :required="isRequired('body')"
        :error="errors.body"
      />
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
