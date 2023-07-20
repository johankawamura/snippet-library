<template>
  <component class="title-component" :is="`h${headerLevel}`">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    headerLevel: {
      type: Number,
      default: 3,
    },
  },
};
</script>

<style lang="scss"></style>
