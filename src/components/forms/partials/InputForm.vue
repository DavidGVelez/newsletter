<script>
export default {
  name: "InputForm",
  data() {
    return { valid: true, active: false, value: "" };
  },
  props: {
    type: {
      type: String,
      default: () => "",
    },
    accept: {
      type: String,
      default: () => "",
    },
    label: {
      type: String,
      default: () => "",
    },
    file_info: {
      type: String,
      default: () => "",
    },
    file_max_size: {
      type: Number,
      default: () => 5242880, // 5Mb
    },
    required: {
      type: Boolean,
      default: false,
    },
    input_name: {
      type: String,
      default: () => "",
    },
    error: {
      type: Object,
      default: () => {},
    },
    counter: {
      type: String,
      default: () => "",
    },
  },
  watch: {
    "$attrs.value"(val) {
      this.value = val;
    },
  },
  methods: {
    handleInput() {
      this.$emit("input", this.value);

      if (this.type === "file") {
        if (this.$refs.input.files[0].size > this.file_max_size) {
          alert(this.__("messages.forms.file_size_limit"));
          this.$refs.input.value = null;
        } else {
          this.$refs.filePlaceholder.innerHTML = this.$refs.input.value
            .split("\\")
            .pop();
        }
      }
    },
    triggerFileInput() {
      this.$refs.input.click();
    },
  },
  computed: {
    getCharacters() {
      return this.value.length + "/" + this.counter;
    },
  },
  mounted() {},
};
</script>

<template>
  <div class="form-controller" :class="error ? 'invalid' : ''">
    <div class="input-wrapper">
      <div class="input">
        <label v-if="label" :for="input_name" class="label">
          {{ label }}
          <span v-if="required" class="required-symbol">*</span>
        </label>
        <input
          v-if="type !== 'textarea' && type !== 'file'"
          v-bind="$attrs"
          v-model="value"
          :id="input_name"
          :name="input_name"
          :type="type"
          :required="required"
          :aria-required="required"
          :maxlength="counter"
          @input="handleInput"
        />

        <label
          v-if="type === 'file'"
          :for="input_name"
          class="custom-file-input"
        >
          <input
            ref="input"
            v-bind="$attrs"
            v-model="value"
            :id="input_name"
            :name="input_name"
            :type="type"
            :accept="accept"
            :required="required"
            :aria-required="required"
            @input="handleInput"
            readonly
            aria-readonly="true"
          />
          <span
            ref="filePlaceholder"
            class="file-area"
            role="button"
            tabindex="0"
            v-on:keyup.enter="triggerFileInput"
          >
            Place here your file
          </span>
        </label>
        <p v-if="file_info" class="file-info">{{ file_info }}</p>

        <textarea
          v-if="type === 'textarea'"
          v-bind="$attrs"
          v-model="value"
          :id="input_name"
          :name="input_name"
          :required="required"
          :aria-required="required"
          :maxlength="counter"
          rows="10"
          @input="handleInput"
        ></textarea>
      </div>
      <div class="input-details">
        <span v-if="error" class="message">{{ error.text }}</span>
        <small v-if="counter" class="counter">{{ getCharacters }}</small>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  & .input {
    display: flex;
    flex-direction: column;
  }

  & .input-details {
    display: flex;
    min-height: 18px;
    justify-content: flex-end;
    margin-top: 5px;
    font-size: 12px;

    &::first-letter {
      text-transform: capitalize;
    }

    & .counter {
      flex-grow: 1;
      text-align: right;
    }
  }
}

.label {
  display: block;
  margin-bottom: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 10px;

  &::first-letter {
    text-transform: capitalize;
  }
}

input:not([type="file"]),
textarea {
  padding: 10px 16px;
  border: 1px solid $black;
  border-radius: 10px;
  color: $clr-text;
  font-family: "Roboto";
  outline: none;
  transition: border-color 0.2s ease-in-out;
  -webkit-appearance: none;

  &::placeholder {
    color: $clr-text;
  }
}

textarea {
  resize: vertical;
}

// --- File input
.custom-file-input {
  & input[type="file"] {
    display: none;
  }

  & .file-area {
    width: 100%;
    margin: 0;
    padding: 20px;
    text-align: center;
    background-color: $white;
    border: 4px dashed $black;
    border-radius: 15px;
    color: $clr-text;
    cursor: pointer;
    transition: border-color 0.2s ease-in-out;
  }
}

.invalid {
  & input,
  & textarea {
    border-color: map-get($red, "600") !important;
  }
}

.required-symbol {
  font-size: 13px;
  color: map-get($red, "600");
}
</style>
