<template>
  <div class="input-component" @click="focusInput">
    <input
      class="input"
      v-model="value"
      @input="updateValue"
      ref="input"
      :type="type"
    />

    <span class="text" :class="{ 'text-empty': value === '' }">
      {{ placeholder }}
    </span>
  </div>
</template>

<script>
export default {
  name: "InputField",
  data() {
    return {
      value: "",
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateValue(event) {
      this.value = event.target.value;
      this.$emit("input", event.target.value);
    },
    focusInput() {
      this.$refs.input.focus();
    },
  },
};
</script>

<style lang="scss">
.input-component {
  position: relative;

  width: 300px;
  height: 72px;

  .text {
    position: absolute;
    left: 15px;
    top: 13px;
    font-weight: 500;
    color: $color-gray-dark;

    transition: top 0.3s ease-out;
  }
  .text-empty {
    top: 25px;
  }
  .icon {
    position: absolute;
    top: 30px;
    left: 20px;
  }
  .input {
    font-weight: 500;
    border: none;
    background-color: $color-gray;

    box-sizing: border-box;

    &:focus {
      outline: none;

      ~ .text-empty {
        top: 13px;
      }
    }

    /* mobile */
    @media (max-width: 767px) {
      font-size: 1.25em;

      height: 80px;
      padding-top: 20px;
      padding-left: 50px;
      padding-right: 20px;

      width: 300px;

      border-radius: 10px;
      text-indent: 8px;
    }

    /* desktop */
    @media (min-width: 768px) {
      font-size: 1em;

      height: 72px;
      padding-top: 20px;
      padding-left: 15px;
      padding-right: 20px;

      width: 300px;

      border-radius: 15px;

      text-indent: 8px;
    }
  }
}
</style>
