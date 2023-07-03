<template>
  <div class="menuIcon" @click="$emit('handleChangeMenuState')">
    <img
      class="icon_img"
      :src="require(`../../assets/icons/${iconSource}.png`)"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  isMenuOpen: {
    type: Boolean,
  },
});

const iconSource = computed(() => {
  return props.isMenuOpen ? "close" : "dropdown";
});
</script>

<style lang="scss">
@import "~/assets/styles/_variables.scss";
.menuIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  margin: 0 1rem 0 0;

  @media only screen and (min-width: $desktop) {
    display: none;
  }

  .icon_img {
    width: 100%;
    height: 100%;
  }
}
</style>
