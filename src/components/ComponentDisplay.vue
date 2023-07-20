<template>
  <div class="component-display">
    <h2>
      <slot name="Name"></slot>
    </h2>
    <div>
      <slot name="Component"></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.component-display {
  padding: 10px;
  padding-bottom: 50px;
}
</style>
