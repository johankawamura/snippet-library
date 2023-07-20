<template>
  <div class="upload">
    <NavigationBarComponent :activeIndex="3"></NavigationBarComponent>
    <div>
      <div class="content">
        <h2>Upload your Content here!</h2>
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
.upload {
  .content {
    height: calc(100vh - 140px);

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
