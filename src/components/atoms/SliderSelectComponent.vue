<template>
  <div class="slider-select-component">
    <input
      type="range"
      min="1"
      max="100"
      value="50"
      class="slider"
      id="myRange"
    />
  </div>
</template>

<script>
export default {
  name: "InputField",
  data() {
    return {
      value: "",
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateValue(event) {
      this.value = event.target.value;
      this.$emit("input", event.target.value);
    },
    focusInput() {
      this.$refs.input.focus();
    },
  },
};
</script>

<style lang="scss">
.slider-select-component {
  /* mobile */
  @media (max-width: 767px) {
  }

  /* desktop */
  @media (min-width: 768px) {
    width: 40%;
    .slider {
      -webkit-appearance: none; /* Override default CSS styles */
      appearance: none;
      border-radius: 10px;

      width: 100%; /* Full-width */
      height: 5px; /* Specified height */
      background: $color-gray-dark; /* Grey background */
      outline: none; /* Remove outline */
      -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
      transition: opacity 0.2s;
    }

    .slider::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      border-radius: 50%;
      width: 15px; /* Set a specific slider handle width */
      height: 15px; /* Slider handle height */
      background: $color-black; /* Green background */
      cursor: pointer; /* Cursor on hover */
    }

    .slider::-moz-range-thumb {
      width: 25px; /* Set a specific slider handle width */
      height: 25px; /* Slider handle height */
      background: #04aa6d; /* Green background */
      cursor: pointer; /* Cursor on hover */
    }
  }
}
</style>
