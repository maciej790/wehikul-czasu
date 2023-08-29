<template>
  <layout>
    <div class="articles">
      <GoBackButton />
      <nav class="articles__navigate">
        <div class="navigate__title">
          <img src="../assets/icons/loupe.png" alt="szukaj" />
          <h2 class="title__heading">Filtruj posty</h2>
        </div>
        <ul class="navigate__categories">
          <li
            class="categories__item"
            :class="{ active: activeIndex === -1 }"
            @click="() => handleFilterCategory('', -1)"
          >
            Wszystkie
          </li>
          <li
            :class="['categories__item', { active: activeIndex === index }]"
            v-for="(category, index) in $page.categories.edges"
            :key="category.node.id"
            @click="() => handleFilterCategory(category.node.id, index)"
          >
            {{ category.node.name }}
          </li>
        </ul>
      </nav>
      <section class="articles__posts">
        <div class="post__card__box" v-if="filtredCategory">
          <g-link
            class="post__card"
            v-for="edge in $page.other.edges"
            :key="edge.node.id"
            :to="edge.node.path"
            v-show="filtredCategory == edge.node.category.id"
          >
            <PostCard class="post__card" :post="edge.node" />
          </g-link>
        </div>
        <div v-else class="post__card__box">
          <g-link
            class="post__card"
            v-for="edge in $page.other.edges"
            :key="edge.node.id"
            :to="edge.node.path"
          >
            <PostCard class="post__card" :post="edge.node" />
          </g-link>
        </div>
      </section>
    </div>
  </layout>
</template>

<script setup>
import PostCard from "../components/PostCard/PostCard.vue";
import GoBackButton from "../components/GoBackButton/GoBackButton.vue";
import { ref } from "vue";
const filtredCategory = ref("");
const activeIndex = ref(-1);

const handleFilterCategory = (cat, index) => {
  filtredCategory.value = cat;
  activeIndex.value = index;
};
</script>

<page-query>
query{
  other: allBlogPost(sortBy: "date", order: DESC) {
      edges {
        node {
          id
          title
          date(format: "YYYY-MM-DD")
          time
          thumbnail
          path
          category{
            id
            name
          }
        }
      }
    }
  
    categories: allCategory {
      edges {
        node {
          id
          name
        }
      }
  }

}
</page-query>

<style lang="scss"></style>

<style lang="scss">
@import "~/assets/styles/_variables.scss";
.articles {
  font-size: 1rem;
  margin: 0;
  width: 90%;
  padding: 0;

  @media only screen and (min-width: $desktop) {
    width: 80%;
  }

  @media only screen and (min-width: $high-desktop) {
    width: 65%;
  }

  .articles__navigate {
    .navigate__title {
      display: flex;
      margin: 40px 0 30px 0;
      font-size: 0.9rem;

      @media only screen and (min-width: $desktop) {
        font-size: 1rem;
        margin: 40px 0 45px 0;
      }
      .title__heading {
        text-align: left;
        color: $white-color;
        margin: 0 0 0 0.5rem;
      }
    }

    .navigate__categories {
      margin: 1rem 0 30px 0;
      padding: 0;
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      width: 100%;

      @media only screen and (min-width: $desktop) {
        margin: 1rem 0 30px 0;
      }

      .categories__item {
        max-width: 60%;
        padding: 5px 15px 5px 15px;
        min-height: 35px;
        background: $red-main-color;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
        margin: 0.5rem 0.5rem 0.5rem 0;
        transition: 0.2s ease-in-out;

        &.active {
          transition: none;
          color: $red-main-color;
          background: $white-color;
          border: 2px solid $red-main-color;
          cursor: pointer;
        }

        &:hover {
          color: $red-main-color;
          background: $white-color;
          cursor: pointer;
        }
      }
    }
  }
  .articles__posts {
    .post__card__box {
      display: grid;
      grid-template-columns: 1fr;
      gap: 40px 40px;
      margin: 0 0 4rem 0;

      @media only screen and (min-width: $desktop) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 40px 40px;
        justify-items: center;
        align-items: center;
      }

      .post__card {
        width: 100%;
        color: $white-color;
        text-decoration: none;
      }
    }
  }
}
</style>
