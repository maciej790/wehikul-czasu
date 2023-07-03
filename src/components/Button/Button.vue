<template>
  <button class="button">
    <g-link class="button__title" :to="props.link">{{ props.title }}</g-link>
  </button>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss">
@import "~/assets/styles/_variables.scss";

.button {
  width: 50%;
  height: 40px;
  padding: 0;
  margin: 0;
  background: $red-main-color;
  color: $bg-color;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
  text-decoration: none;
  letter-spacing: 1px;

  .button__title {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: $bg-color;
    transition: all 0.2s ease-in-out;
  }

  @media only screen and (min-width: $desktop) {
    width: 30%;
  }
}

.button:hover > .button__title {
  color: $white-color;
  cursor: pointer;
}
</style>
