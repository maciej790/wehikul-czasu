<template>
  <layout>
    <section class="post">
      <GoBackButton />
      <h1 class="post__title">{{ $page.blogPost.title }}</h1>
      <ClockAndTime :data="$page.blogPost" />
      <div class="post__category">{{ $page.blogPost.category.name }}</div>
      <div class="post__belt"></div>
      <article class="post__article">
        <img :src="$page.blogPost.thumbnail" class="article__image" />
        <div class="article__content" v-html="$page.blogPost.content"></div>
      </article>
    </section>
  </layout>
</template>

<page-query>
    query ($id: ID!) {
      blogPost(id: $id) {
        title
        date(format: "YYYY-MM-DD")
        time
        thumbnail
        content
        category{
          name
        }
      }
    }
</page-query>

<script setup>
import ClockAndTime from "../components/ClockAndTime/ClockAndTime.vue";
import GoBackButton from "../components/GoBackButton/GoBackButton.vue";
</script>

<style lang="scss">
@import "~/assets/styles/_variables.scss";

.post {
  width: 90%;
  margin: 45px 0 0 0;

  @media only screen and (min-width: $desktop) {
    width: 70%;
  }

  @media only screen and (min-width: $high-desktop) {
    width: 60%;
  }

  .post__title {
    color: $red-main-color;
    font-size: 2rem;
    text-align: left;
    margin: 0 0 30px 0;
  }

  .post__category {
    width: 180px;
    min-height: 30px;
    background: $red-main-color;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    margin: 1rem 0 0 0;
  }

  .post__belt {
    width: 100%;
    margin: 30px 0 45px 0;
    border-bottom: 1px solid $gray-color;
  }

  .post__article {
    width: 100%;
    margin: 0 0 30px 0;

    .article__image {
      width: 100%;

      @media only screen and (min-width: $desktop) {
        height: 450px;
      }
    }

    .article__content {
      margin: 60px 0 0 0;
      font-size: 1.3rem;
      text-align: justify;
      line-height: 155%;
      text-align: left;

      img {
        width: 100%;
        height: 100%;
        margin: 1rem 0 1rem 0;
      }

      @media only screen and (min-width: $desktop) {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
