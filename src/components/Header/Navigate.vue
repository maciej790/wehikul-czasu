<template>
  <nav class="nav">
    <ul class="nav__menu" v-for="(item, index) in menuItems" :key="index">
      <li class="menu__link">
        <g-link class="link__tag" :to="item.path">{{ item.label }}</g-link>
      </li>
    </ul>
  </nav>
</template>

<page-query>
  
 
</page-query>

<script setup>
import { ref } from "vue";

const menuItems = ref([
  { label: "Home", path: "/" },
  { label: "Artykuły", path: "/artykuly" },
  { label: "O autorze", path: "/o_autorze" },
  { label: "Współpraca", path: "/wspolpraca" },
]);
</script>

<style lang="scss">
@import "~/assets/styles/_variables.scss";

.nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 0 0;
  z-index: 999;

  @media only screen and (min-width: $desktop) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
    top: 7rem;
    left: 0;
    width: 50%;
  }

  .nav__menu {
    width: 100%;
    padding: 0 0 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: $desktop) {
      padding: 0;
      align-items: center;
    }

    .menu__link {
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem 0 1rem 0;

      .link__tag {
        color: $white-color;
        text-decoration: underline;
        text-transform: uppercase;
        transition: color 0.2s ease-in-out;

        @media only screen and (min-width: $desktop) {
          text-decoration: none;
          font-size: 1rem;
        }
      }

      .active {
        color: $red-main-color;
      }

      .link__tag:hover {
        color: $red-main-color;
      }
    }
  }
}
</style>
