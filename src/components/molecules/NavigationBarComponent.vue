<template>
  <div class="navigation-bar-component">
    <div class="logo">
      <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-box"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="#000000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
          <path d="M12 12l8 -4.5" />
          <path d="M12 12l0 9" />
          <path d="M12 12l-8 -4.5" />
        </svg>
      </span>
      <h2>Super Snippets</h2>
    </div>
    <div class="navigation">
      <ul class="navigation-menu">
        <li>
          <AnchorComponent
            url="/"
            variant="background-clear"
            :class="{ active: activeIndex === 1 }"
          >
            Home
          </AnchorComponent>
        </li>
        <li>
          <AnchorComponent
            url="components"
            variant="background-clear"
            :class="{ active: activeIndex === 2 }"
          >
            Components
          </AnchorComponent>
        </li>
        <li>
          <AnchorComponent
            url="upload"
            variant="background-clear"
            :class="{ active: activeIndex === 3 }"
          >
            Upload
          </AnchorComponent>
        </li>
      </ul>
    </div>
    <div class="search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-box"
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
    </div>
  </div>
</template>

<script>
import AnchorComponent from "../atoms/AnchorComponent.vue";

export default {
  props: {
    activeIndex: {
      type: Number,
      required: true,
    },
  },
  components: { AnchorComponent },
};
</script>

<style lang="scss">
.navigation-bar-component {
  background-color: $color-white;
  width: 100%;
  height: 70px;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    margin-left: 20px;
    width: 20%;
    h2 {
      font-size: 1.25em;
      font-weight: 700;
    }
    span {
      margin-top: 5px;
      margin-right: 10px;
    }
    display: flex;
    align-items: center;

    grid-column: 1;
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;

    .navigation-menu {
      display: flex;

      li {
        display: flex;
        align-items: center;

        .anchor-component {
          color: $color-gray-dark;
          font-size: 1.25em;
          font-weight: 500;
          margin-right: 20px;
          width: 120px;
          height: 50px;
        }
        .background-black {
          margin-left: 20px;
        }
      }
    }
  }

  .active {
    color: $color-black !important;
  }

  .search {
    margin-right: 20px;
    width: 20%;
    display: flex;
    justify-content: right;
    grid-column: 3;
  }
}
</style>
