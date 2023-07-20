<template>
  <div class="login-component">
    <InputComponent placeholder="Username">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class=""
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>
    </InputComponent>

    <InputComponent placeholder="Password" type="password">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class=""
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
          d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"
        />
        <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
        <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
      </svg>
    </InputComponent>

    <AnchorComponent multiplier="13">Login</AnchorComponent>

    <CheckboxComponent :value="false">Remember Me</CheckboxComponent>
  </div>
</template>
<script>
import AnchorComponent from "../atoms/AnchorComponent.vue";
import CheckboxComponent from "../atoms/CheckboxComponent.vue";
import InputComponent from "../atoms/InputComponent.vue";

export default {
  props: {},
  components: { InputComponent, AnchorComponent, CheckboxComponent },
};
</script>
<style lang="scss">
.login-component {
  .checkbox-component {
    font-weight: 600;
    padding-right: 140px;
  }

  position: relative;
  border-radius: 20px;
  padding-top: 25px;

  background-color: white;

  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;

  width: 350px;
  height: 300px;

  .anchor-component {
    position: absolute;
    bottom: -35px;
  }
}
</style>
