<template>
  <div class="box">
    <p class="box__date">{{ props.data.date }}</p>
    <p class="box__time">
      <img
        :src="require(`../../assets/icons/clock.png`)"
        alt="time"
        class="time__clock"
      />
      {{ timeString }}
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const timeString = computed(() => {
  if (props.data.time == 1) return `${props.data.time} minuta`;
  else if (props.data.time == 2 || props.data.time == 3 || props.data.time == 4)
    return `${props.data.time} minuty`;
  else return `${props.data.time} minut`;
});
</script>

<style lang="scss">
@import "~/assets/styles/_variables.scss";

.box {
  display: flex;
  align-items: center;
  font-weight: bold;

  .box__time {
    display: flex;
    align-items: center;
    font-weight: bold;

    .time__clock {
      margin: 0 5px 0 15px;
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
