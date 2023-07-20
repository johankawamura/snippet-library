<template>
  <label class="checkbox-component" :class="{ checked: isChecked }">
    <input v-model="isChecked" type="checkbox" @click="toggleCheck" />
    <div class="checkbox" :class="{ checked: isChecked }">
      <svg
        v-if="isChecked"
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-check"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="#FFFFFF"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l5 5l10 -10" />
      </svg>
    </div>

    <span> <slot></slot> </span>
  </label>
</template>

<script>
export default {
  name: "CustomCheckbox",
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["toggle"],
  data() {
    return {
      isChecked: this.value,
    };
  },
  methods: {
    toggleCheck() {
      this.isChecked = !this.isChecked;
      this.$emit("toggle", this.isChecked);
    },
  },
};
</script>

<style lang="scss">
.checkbox-component {
  color: $color-black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  user-select: none; /* it's IE 10 and IE 11 does not work  */
  font-weight: 500;

  /*Media Queries*/

  &.checked {
    animation: myAnimation 0.2s ease-out;
  }

  /* mobile */
  @media (max-width: 767px) {
    span {
      font-size: 1.25em;
    }
  }

  /* desktop */
  @media (min-width: 768px) {
    span {
      margin-top: 0.7px;
      font-size: 1em;
    }
  }

  @keyframes myAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.04);
    }
    100% {
      transform: scale(1);
    }
  }

  input[type="checkbox"] {
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkbox {
    margin-right: 10px;
    transform: rotate(45deg);
    border: 2.5px solid $color-black;
    box-sizing: border-box;

    border-radius: 7px;
    width: 25px;
    height: 25px;

    &.checked {
      background-color: $color-black;
    }

    svg {
      margin-left: 2.5px;
      transform: rotate(-45deg);
    }
  }
}
</style>
