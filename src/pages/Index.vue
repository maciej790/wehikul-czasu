<template>
  <Layout>
    <main class="posts">
      <SectionTitle title="Najnowsze artykuły" />
      <section class="recent">
        <g-link
          class="recent__card"
          v-for="edge in $page.recent.edges"
          :key="edge.node.id"
          :to="edge.node.path"
        >
          <PostCard class="recent__card" :post="edge.node" />
        </g-link>
      </section>

      <SectionTitle title="Artykuł dnia" />
      <DailySection :data="$page.daily.edges[0].node" />
      <SectionTitle title="II Wojna Światowa - Najnowsze" />
      <section class="secondWar">
        <g-link
          class="secondWar__card"
          v-for="edge in $page.secondWar.edges"
          :key="edge.node.id"
          :to="edge.node.path"
        >
          <PostCard class="secondWar__card" :post="edge.node" />
        </g-link>
      </section>
      <SectionTitle title="Reszta artykułów" />
      <section class="other">
        <g-link
          class="other__card"
          v-for="edge in $page.other.edges"
          :key="edge.node.id"
          :to="edge.node.path"
        >
          <PostCard class="other__card" :post="edge.node" />
        </g-link>
      </section>
      <div class="paginatiom">
        <Button title="Zobacz wszystkie" class="btn" :link="'/artykuly'" />
      </div>
    </main>
  </Layout>
</template>

<script setup>
import SectionTitle from "../components/SectionTitle/SectionTitle.vue";
import PostCard from "../components/PostCard/PostCard.vue";
import DailySection from "../components/DailySection/DailySection.vue";
import Button from "../components/Button/Button.vue";
</script>

<page-query>
  query  {
    recent: allPost(sortBy: "date", order: DESC, limit: 3) {
      edges {
        node {
          id
          title
          date(format: "YYYY-MM-DD")
          time
          thumbnail
          path
          tags {
            id
            title
          }
        }
      }
    }

    other: allPost(sortBy: "date", order: DESC, skip: 3, limit: 12) {
      edges {
        node {
          id
          title
          date(format: "YYYY-MM-DD")
          time
          thumbnail
          path
          tags {
            id
            title
          }
        }
      }
    }
  
    daily: allPost(sortBy: "date", order: DESC, limit: 1) {
      edges {
        node {
          id
          title
          date(format: "YYYY-MM-DD")
          time
          thumbnail
          content
          path
          tags {
            id
            title
          }
        }
      }
    }
  
    secondWar: allPost(filter: {tags: {contains: ["II Wojna Światowa"]}} limit: 4) {
      edges {
        node {
          id
          title
          date(format: "YYYY-MM-DD")
          time
          thumbnail
          path
          tags {
            id
            title
          }
        }
      }
    }
  }


  </page-query>

<style lang="scss">
@import "~/assets/styles/_variables.scss";

.posts {
  width: 90%;
  margin: 0;
  padding: 0;

  @media only screen and (min-width: $desktop) {
    font-size: 1rem;
    width: 80%;
  }

  @media only screen and (min-width: $high-desktop) {
    font-size: 1rem;
    width: 65%;
  }

  .recent {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 45px 0px;
    justify-items: center;
    align-items: center;
    position: relative;

    .recent__card {
      width: 100%;
      padding: 0;
      margin: 0;
      text-decoration: none;
      color: $white-color;
    }

    @media only screen and (min-width: $desktop) {
      .recent__card:nth-of-type(1) {
        grid-row-start: 1;
        grid-column-start: 1;
        grid-row-end: 3;
        grid-column-end: 2;
        height: 100%;

        .recent__card {
          .card__belt {
          }
        }

        .recent__card {
          .belt__top {
            flex-direction: row;
            align-items: flex-start;
          }
        }

        .recent__card {
          .top__title {
            width: 65%;
            margin: 0 0 30px 0;
          }
        }
      }

      .recent__card:nth-of-type(2) {
        grid-row-start: 1;
        grid-column-start: 2;

        grid-row-end: 2;
        grid-column-end: 3;
      }

      .recent__card:nth-of-type(3) {
        grid-row-start: 2;
        grid-column-start: 2;

        grid-row-end: 3;
        grid-column-end: 3;
      }
    }

    @media only screen and (min-width: $desktop) {
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;

      gap: 40px;
      margin: 0 0 100px 0;
    }

    .recent__carousel {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: orange;
    }
  }

  .slider {
    width: 100%;
  }

  .secondWar {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 40px 0px;
    justify-items: center;
    align-items: center;

    .secondWar__card {
      width: 100%;
      text-decoration: none;
      color: $white-color;
    }

    @media only screen and (min-width: $desktop) {
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;

      gap: 40px;
      margin: 0 0 100px 0;

      .secondWar__card {
        width: 100%;
        text-decoration: none;
        color: $white-color;
      }
    }
  }

  .other {
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

    .other__card {
      width: 100%;
      color: $white-color;
      text-decoration: none;
    }
  }

  .paginatiom {
    width: 100%;
    display: flex;
    justify-content: center;

    .btn {
      width: 50%;

      @media only screen and (min-width: $desktop) {
        width: 15%;
      }
    }
  }
}
</style>
