<template>
  <layout>
    <div>
      <h1>Artykuły</h1>
      <ul v-for="(item, index) in $page.category.edges" :key="index">
        <li>{{ item.node.tags[0].title }}</li>
      </ul>
    </div>
  </layout>
</template>

<page-query>
  query {
  category: allPost {
    edges {
      node {
        tags {
          title
        }
      }
    }
  }
}
</page-query>

<script setup></script>

<style lang="scss"></style>

<style lang="scss">
@import "~/assets/styles/_variables.scss";
</style>
