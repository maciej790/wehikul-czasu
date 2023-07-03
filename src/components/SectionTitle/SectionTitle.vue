<template>
  <div class="title">
    <div class="title__dot"></div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
});
</script>

<style lang="scss">
@import "~/assets/styles/_variables.scss";

.title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  margin: 45px 0 45px 0;
  font-size: 0.7rem;

  @media only screen and (min-width: $desktop) {
    font-size: 0.9rem;
    margin: 60px 0 60px 0;
  }

  .title__dot {
    width: 1rem;
    height: 1rem;
    background: $red-main-color;
    border-radius: 100px;
    margin: 0 1rem 0 0;
  }
}
</style>
