<template>
  <div class="home">
    <NavigationBarComponent :activeIndex="1"></NavigationBarComponent>
    <div>
      <div class="content">
        <h1>
          The Henkel Hiedl <br />
          Super Snippets Library.
        </h1>
        <div class="call-to-action">
          <InputComponent placeholder="Search Library">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class=""
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </InputComponent>
          <AnchorComponent url="upload"> Upload! </AnchorComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from "@/components/atoms/InputComponent.vue";
import AnchorComponent from "@/components/atoms/AnchorComponent.vue";

import NavigationBarComponent from "@/components/molecules/NavigationBarComponent.vue";
export default {
  name: "HomeView",
  components: { NavigationBarComponent, InputComponent, AnchorComponent },
};
</script>

<style lang="scss">
.home {
  .content {
    h1 {
      font-size: 4em;
      text-align: center;
    }

    .call-to-action {
      display: flex;
      gap: 20px;
    }
    width: 100%;
    height: calc(100vh - 140px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
