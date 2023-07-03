<template>
  <layout>
    <h1>{{ $page.post.title }}</h1>
  </layout>
</template>

<page-query>
    query ($id: ID!) {
      post(id: $id) {
        title
      }
    }
</page-query>

<script setup></script>

<style lang="scss"></style>
