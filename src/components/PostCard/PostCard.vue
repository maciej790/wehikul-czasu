<template>
  <article class="card" :style="imageStyle">
    <div class="card__category">
      <p>{{ props.post.tags[0].title }}</p>
    </div>
    <div class="card__belt" v-if="!props.isDaily">
      <div class="belt__top">
        <h2 class="top__title">
          {{ props.post.title }}
        </h2>
        <ClockAndTime :data="props.post" />
      </div>
      <div class="belt__bottom"></div>
    </div>
  </article>

  <!-- <g-link class="post-card__link" :to="post.path"></g-link> -->
</template>

<script setup>
import ClockAndTime from "../ClockAndTime/ClockAndTime.vue";
import { computed } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },

  isDaily: {
    type: Boolean,
  },
});

const imageStyle = computed(() => {
  return {
    background: `url('${props.post.thumbnail.src}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
});
</script>

<style lang="scss">
@import "~/assets/styles/_variables.scss";

.card {
  width: 100%;
  min-height: 300px;
  position: relative;
  transition: transform 0.5s ease-out;

  .card__category {
    width: 180px;
    min-height: 30px;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    position: relative;
    top: 0.5rem;
    left: 0.5rem;
  }

  .card__belt {
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 0px 0px 10px 10px;
    opacity: 0, 6;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;

    .belt__top {
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;

      .top__title {
        color: $red-main-color;
        margin: 0 0 10px 0;
        font-size: 1rem;
        line-height: 130%;

        @media only screen and (min-width: $desktop) {
          font-size: 1.2rem;
          margin: 0 0 30px 0;
          width: 70%;
          text-align: justify;
        }
      }

      .top__data {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        .top__date {
        }

        .top__time {
          display: flex;
          align-items: center;
          font-weight: bold;

          .time__clock {
            margin: 0 15px 0 0;
          }
        }
      }
    }

    .belt__bottom {
      width: 100%;

      .bottom__description {
        text-align: justify;
        line-height: 130%;
      }
    }
  }
}

.card:hover {
  cursor: pointer;
  transform: scale(0.9);
}
</style>
