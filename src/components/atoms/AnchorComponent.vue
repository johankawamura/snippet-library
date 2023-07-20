<template>
  <a :class="['anchor-component', variant]" :href="url" :style="cssProps">
    <slot></slot>
  </a>
</template>
<script>
export default {
  props: {
    url: { required: true, type: String },
    variant: {
      type: String,
      default: "background-black",
      validator: (variant) =>
        ["background-clear", "background-black", "background-main"].includes(
          variant
        ),
    },
    multiplier: {
      default: 13,
      type: Number,
    },
  },
  computed: {
    cssProps() {
      return {
        "--multiplier": this.multiplier + "em",
      };
    },
  },
};
</script>
<style lang="scss">
.anchor-component {
  /*Basic */
  text-decoration: none;
  font-weight: 700;

  /*Media Queries*/

  /* mobile */
  @media (max-width: 767px) {
    font-size: 1.25em;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 4em;
    width: var(--multiplier);

    font-weight: 500;

    border-radius: 15px;
  }

  /* desktop */
  @media (min-width: 768px) {
    font-size: 1em;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 72px;
    width: var(--multiplier);

    font-weight: 500;

    border-radius: 15px;
  }

  /*Variants*/

  &.background-black {
    color: $color-white;
    background-color: $color-black;
    transition: all ease 0.3s;
  }
  &.background-clear {
    color: $color-black;
  }
  &.background-main {
    color: $color-white;
    background-color: $color-main;

    transition: all ease 0.3s;
  }

  @media (pointer: fine) {
    &.background-black:hover {
      transform: translateY(-5px);
      box-shadow: 0px 10px 35px -10px #000000, 5px 10px 15px 5px;
    }
    &.background-main:hover {
      transform: translateY(-5px);

      box-shadow: 0px 10px 35px -10px $color-main, 5px 10px 15px 5px;
    }
  }
}
</style>
