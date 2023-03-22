<template>
  <ul class="filters">
    <li v-for="filter in filters" v-bind:key="filter">
      <slot :filter="filter"></slot>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

  export default defineComponent({
    props: ['filters'],
  });
</script>

<style scoped>
  .filters {
    width: 120px;
    list-style-type: none;
  }
</style>
