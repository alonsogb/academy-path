<template>
  <ul class="filters">
    <li v-for="filter in filters" v-bind:key="filter">
      <slot :filter="filter"></slot>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['filters']
  };
</script>

<style scoped>
  .filters {
    width: 120px;
    list-style-type: none;
  }
</style>