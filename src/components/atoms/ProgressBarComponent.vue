<template>
  <div class="percent">
    <svg>
      <circle cx="45" cy="45" r="40"></circle>
      <circle cx="45" cy="45" r="40" :style="`--percent: ${percent}`"></circle>
    </svg>
    <div class="number">
      <h3>{{ percent }}%</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initalPerecet: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      percent: this.initalPerecet,
    };
  },
  mounted: function () {
    window.setInterval(() => {
      this.percent = this.percent + 1;
      if (this.percent === 101) {
        this.percent = 0;
      }
    }, 100);
  },
};
</script>

<style lang="scss">
.percent {
  width: 90px;
  height: 90px;
  position: relative;

  svg {
    position: relative;
    width: 90px;
    height: 90px;
    transform: rotate(-90deg);
  }

  svg circle:nth-of-type(1) {
    fill: none;
    stroke: $color-gray-dark;
    stroke-width: 10;
  }

  svg circle:nth-of-type(2) {
    fill: none;
    stroke-width: 10;
    stroke-linecap: round;

    transition: stroke-dashoffset ease-out 0.3s;
    stroke-dasharray: 250px;
    stroke-dashoffset: calc(250px - (250px * var(--percent)) / 100);
    stroke: $color-black;
  }

  .number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-weight: 600;
    font-size: 1em;
  }
}
</style>
