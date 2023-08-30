<template>
  <button class="back" @click="handleButtonClick">
    <div class="back__img">
      <img src="../../assets/icons/back (1).png" alt="powrot" />
    </div>
  </button>
</template>

<script setup>
const handleButtonClick = () => {
  window.history.back();
};
</script>

<style lang="scss">
@import "~/assets/styles/_variables.scss";
.back {
  width: 40px;
  height: 40px;
  background: $red-main-color;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  border: none;
  outline: none;
  left: 20px;
  bottom: 20px;
  z-index: 999;
  transition: transform 0.2s ease-in-out;

  @media only screen and (min-width: $desktop) {
    width: 45px;
    height: 45px;
  }

  .back__img {
    width: 80%;
    height: 80%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    transform: scale(0.9);
    cursor: pointer;
  }
}
</style>
