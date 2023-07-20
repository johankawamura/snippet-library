<template>
  <div class="landing-1-component">
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
      <div class="call-to-action">
        <AnchorComponent>Call to Action</AnchorComponent>
        <AnchorComponent variant="background-main"
          >See all Plans</AnchorComponent
        >
      </div>
    </div>

    <div class="image-container">
      <img src="../../assets//images/mountains.jpg" alt="" />
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
.landing-1-component {
  position: relative;
  width: 100%;
  height: 100vh;

  justify-content: center;
  display: flex;
  gap: 7.5%;

  .logo {
    position: absolute;
    top: 10px;
    left: 30px;
  }

  .content-container {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title-component {
      margin: 0;
      font-size: 3em;
    }
    .padding-component {
      margin: 0;
    }

    .anchor-component {
      margin-top: 40px;
    }

    .call-to-action {
      display: flex;
      gap: 20px;
    }
  }

  .image-container {
    width: 35%;
    display: flex;
    align-items: center;
    img {
      border-radius: 20px;

      width: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
    }
  }
}
</style>
