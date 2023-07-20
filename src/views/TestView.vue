<template>
  <div class="atoms-and-molecules">
    <h1 class="section">Atoms</h1>

    <ComponentDisplay>
      <template v-slot:Name> Title</template>
      <template v-slot:Component>
        <TitleComponent> Hello </TitleComponent>
      </template>
    </ComponentDisplay>

    <ComponentDisplay>
      <template v-slot:Name> Title with h5</template>
      import Landing2Component from
      "@/components/organisms/Landing2Component.vue"; import Landing1Component
      from "@/components/organisms/Landing1Component.vue";
      <template v-slot:Component>
        <TitleComponent :headerLevel="5"> Hello </TitleComponent>
      </template>
    </ComponentDisplay>

    <ComponentDisplay>
      <template v-slot:Name> Paragraph </template>
      <template v-slot:Component>
        <ParagraphComponent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          nulla id ea eaque distinctio minima ipsum est mollitia voluptatum,
          officiis quidem dolores quo harum nisi vitae ad at dolor quasi.
        </ParagraphComponent>
      </template>
    </ComponentDisplay>

    <ComponentDisplay>
      <template v-slot:Name> Black Anchor </template>
      <template v-slot:Component>
        <AnchorComponent url="about" variant="background-black">
          Login
        </AnchorComponent>
      </template>
    </ComponentDisplay>

    <ComponentDisplay>
      <template v-slot:Name> Black Anchor Wide </template>
      <template v-slot:Component>
        <AnchorComponent
          url="about"
          variant="background-black"
          :multiplier="20"
        >
          Apply
        </AnchorComponent>
      </template>
    </ComponentDisplay>

    <ComponentDisplay>
      <template v-slot:Name> Color Anchor </template>
      <template v-slot:Component>
        <AnchorComponent url="about" variant="background-main" :multiplier="10">
          About
        </AnchorComponent>
      </template>
    </ComponentDisplay>

    <ComponentDisplay>
      <template v-slot:Name> Clear Anchor </template>
      <template v-slot:Component>
        <AnchorComponent url="about" variant="background-clear">
          About
        </AnchorComponent>
      </template>
    </ComponentDisplay>

    <ComponentDisplay>
      <template v-slot:Name> Checkbox </template>
      <template v-slot:Component>
        <CheckboxComponent>Do the Dishes</CheckboxComponent>
      </template>
    </ComponentDisplay>

    <ComponentDisplay>
      <template v-slot:Name> Slider Select </template>
      <template v-slot:Component>
        <SliderSelectComponent></SliderSelectComponent>
      </template>
    </ComponentDisplay>

    <ComponentDisplay>
      <template v-slot:Name> Progressbar </template>
      <template v-slot:Component>
        <ProgressBar :initalPerecet="50"></ProgressBar>
      </template>
    </ComponentDisplay>

    <ComponentDisplay>
      <template v-slot:Name> Input </template>
      <template v-slot:Component>
        <InputComponent placeholder="Testing">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"
            />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
        </InputComponent>
      </template>
    </ComponentDisplay>

    <h1 class="section">Molecules</h1>

    <NavigationBarComponent></NavigationBarComponent>

    <ComponentDisplay>
      <template v-slot:Name> Login Panel</template>
      <template v-slot:Component>
        <LoginComponent></LoginComponent>
      </template>
    </ComponentDisplay>

    <ScrollTitleComponent></ScrollTitleComponent>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>

  <h1 class="section">Organisms</h1>

  <h2>Landing Component 1</h2>
  <hr />
  <Landing1Component></Landing1Component>
  <hr />

  <h2>Landing Component 2</h2>
  <hr />
  <Landing2Component></Landing2Component>
  <hr />

  <h2>Landing Component 3</h2>
  <hr />
  <Landing3Component></Landing3Component>
  <hr />

  <h2>Landing Component 4</h2>
  <hr />
  <Landing4Component></Landing4Component>
  <hr />

  <h2>Landing Component 5</h2>
  <hr />
  <Landing5Component></Landing5Component>
  <hr />
</template>
<script>
import ComponentDisplay from "@/components/ComponentDisplay.vue";

import AnchorComponent from "@/components/atoms/AnchorComponent.vue";
import CheckboxComponent from "@/components/atoms/CheckboxComponent.vue";
import InputComponent from "@/components/atoms/InputComponent.vue";
import TitleComponent from "@/components/atoms/TitleComponent.vue";
import ParagraphComponent from "@/components/atoms/ParagraphComponent.vue";
import LoginComponent from "@/components/molecules/LoginComponent.vue";
import ScrollTitleComponent from "@/components/molecules/ScrollTitleComponent.vue";
import ProgressBar from "@/components/atoms/ProgressBarComponent.vue";
import NavigationBarComponent from "@/components/molecules/NavigationBarComponent.vue";
import SliderSelectComponent from "@/components/atoms/SliderSelectComponent.vue";
import Landing1Component from "@/components/organisms/Landing1Component.vue";
import Landing2Component from "@/components/organisms/Landing2Component.vue";
import Landing3Component from "@/components/organisms/Landing3Component.vue";
import Landing4Component from "@/components/organisms/Landing4Component.vue";
import Landing5Component from "@/components/organisms/Landing5Component.vue";

export default {
  components: {
    ComponentDisplay,
    AnchorComponent,
    CheckboxComponent,
    InputComponent,
    ScrollTitleComponent,
    LoginComponent,
    TitleComponent,
    ParagraphComponent,
    ProgressBar,
    NavigationBarComponent,
    SliderSelectComponent,
    Landing1Component,
    Landing2Component,
    Landing3Component,
    Landing4Component,
    Landing5Component,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
.header {
  color: $color-black;
  font-size: 5em;
}
.atoms-and-molecules {
  margin-left: 10vw;
  margin-right: 10vw;
}
.section {
  color: $color-black;
  font-size: 3em;
}
</style>
