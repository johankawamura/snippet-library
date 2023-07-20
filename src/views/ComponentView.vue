<template>
  <div class="component">
    <NavigationBarComponent :activeIndex="2"></NavigationBarComponent>
    <div>
      <div class="content">
        <h2>Components!</h2>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBarComponent from "@/components/molecules/NavigationBarComponent.vue";
export default {
  name: "HomeView",
  components: { NavigationBarComponent },
};
</script>

<style lang="scss">
.component {
  .content {
    height: calc(100vh - 140px);

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
