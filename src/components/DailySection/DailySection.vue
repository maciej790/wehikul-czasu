<template>
  <section class="daily">
    <div class="daily__top">
      <PostCard :post="data" :isDaily="true" class="daily__card" />
    </div>
    <div class="daily__bottom">
      <h1 class="bottom__title">
        {{ props.data.title }}
      </h1>
      <ClockAndTime :data="data" />
      <div class="bottom__space" style="margin: 0 0 40px 0"></div>
      <div class="card__category">
        <p>{{ props.data.tags[0].title }}</p>
      </div>
      <div class="bottom__sentence">
        <p v-html="firstSentences"></p>
      </div>
      <Button title="Czytaj dalej" :link="props.data.path" />
    </div>
  </section>
</template>

<script setup>
import PostCard from "../PostCard/PostCard.vue";
import ClockAndTime from "../ClockAndTime/ClockAndTime.vue";
import Button from "../Button/Button.vue";
import { computed } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const firstSentences = computed(() => {
  const content = props.data.content;
  const sentences = content.split(".");
  const firstThreeSentences = sentences.slice(0, 3);
  const excerpt = firstThreeSentences.join(". ") + ".";
  return `${excerpt}${" "}(...)`;
});
</script>

<style lang="scss">
@import "~/assets/styles/_variables.scss";

.daily {
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: $desktop) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0 0 100px 0;
  }
  .daily__top {
    .daily__card {
      transform: none;
      cursor: default;

      @media only screen and (min-width: $desktop) {
        width: 100%;
        height: 100%;
      }
    }

    @media only screen and (min-width: $desktop) {
      width: 30%;
      height: 100%;
      margin: 0 60px 0 0;
    }
  }

  .daily__bottom {
    width: 100%;
    margin: 40px 0 0 0;

    @media only screen and (min-width: $desktop) {
      width: 40%;
      height: 100%;
      margin: 0;
    }

    .card__category {
      width: 180px;
      min-height: 30px;
      background: $red-main-color;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0 1.5rem 0;
      border-radius: 100px;
    }

    .bottom__title {
      color: $red-main-color;
      text-transform: uppercase;
      margin: 0 0 7px 0;
      font-size: 1.2rem;

      @media only screen and (min-width: $desktop) {
        margin: 0 0 30px 0;
      }
    }

    .bottom__description {
      text-align: justify;
      line-height: 150%;
      margin: 20px 0 20px 0;
    }

    .bottom__sentence {
      margin: 0 0 50px 0;
      text-align: justify;
      line-height: 150%;
    }

    .bottom_data {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
      margin: 0 0 50px 0;

      .data__date {
      }

      .data__time {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .time__clock {
          margin: 0 15px 0 0;
        }
      }
    }
  }
}
</style>
