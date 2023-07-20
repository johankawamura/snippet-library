<template>
  <div class="landing-4-component">
    <TitleComponent class="logo" :headerLevel="1"> Logo </TitleComponent>

    <div class="content-container">
      <TitleComponent :headerLevel="1">
        A Header Text lor sit amet new amazing product
      </TitleComponent>
      <ParagraphComponent>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        maiores officia dignissimos soluta quidem aperiam laboriosam quae
        perferendis facere error debitis qui rem saepe iste, enim molestiae ex
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        corrupti in?
      </ParagraphComponent>
      <AnchorComponent>Call to Action</AnchorComponent>
    </div>
  </div>
</template>
<script>
import TitleComponent from "../atoms/TitleComponent.vue";
import ParagraphComponent from "../atoms/ParagraphComponent.vue";
import AnchorComponent from "../atoms/AnchorComponent.vue";

export default {
  props: {},
  components: { TitleComponent, ParagraphComponent, AnchorComponent },
};
</script>
<style lang="scss">
.landing-4-component {
  position: relative;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(../../assets/images/mountains.jpg);
  background-size: cover;

  .content-container {
    color: $color-white;
    text-align: center;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5%;

    .title-component {
      margin: 0;
      margin-bottom: 30px;
      font-size: 3em;
    }
    .paragraph-component {
      margin: 0;
      margin-bottom: 40px;
    }

    .anchor-component:hover {
      box-shadow: none;
    }
  }

  .logo {
    color: $color-white;
    position: absolute;
    top: 10px;
    left: 30px;
  }
}
</style>
