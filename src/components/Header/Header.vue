<template>
  <header class="header">
    <div class="header__top">
      <div class="logo"></div>
      <Icon
        @handleChangeMenuState="isMenuOpen = !isMenuOpen"
        :isMenuOpen="isMenuOpen"
        v-if="!isMenuOpen"
      />
    </div>
    <div class="header__down" :class="{ open: isMenuOpen }">
      <Icon
        @handleChangeMenuState="isMenuOpen = !isMenuOpen"
        :isMenuOpen="isMenuOpen"
      />
      <h2 class="header__motto">
        Zwyciężcy piszą <span class="red">Historię</span> na nowo
      </h2>
      <Navigate />
    </div>
  </header>
</template>

<script setup>
import Navigate from "./Navigate.vue";
import Icon from "./Icon.vue";
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>

<style lang="scss">
@import "~/assets/styles/_variables.scss";
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  background: $bg-color;

  @media only screen and (min-width: $desktop) {
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 0 4rem 0;
  }

  .header__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 3rem;
    height: 4rem;

    @media only screen and (min-width: $desktop) {
      height: 8rem;
    }

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;
      color: white;
      background: url("../../assets/images/logo.jpg");
      background-position: center;
      background-size: cover;

      @media only screen and (min-width: $desktop) {
        height: 8rem;
        width: 8rem;
        margin: 0 1rem 0 0;
      }

      .logo__img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .header__down {
    width: 100%;
    background: $mbile-nav-bg;
    padding: 2rem 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    min-height: 100vh;
    top: 0;
    left: 0;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.2s ease-in-out;

    @media only screen and (min-width: $desktop) {
      opacity: 1;
      transform: none;
      transition: none;
      min-height: auto;
      position: static;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0;
      background: $bg-color;
    }

    .header__motto {
      width: 100%;
      text-align: center;
      margin: 2rem 0 0 0;

      @media only screen and (min-width: $desktop) {
        margin: 0;
        text-align: right;
        font-size: 1.7rem;
        width: 50%;
        margin: 0 1rem 0 0;
      }

      .red {
        color: $red-main-color;
      }

      // @media only screen and (min-width: $desktop) {
      //   top: 0;
      //   right: 0;
      //   text-align: right;
      //   background: orange;
      //   width: 30%;
      // }
    }
    &.open {
      transform: scale(1);
      opacity: 1;
      transition: opacity 0.1s ease-in-out;
    }
  }
}
</style>
