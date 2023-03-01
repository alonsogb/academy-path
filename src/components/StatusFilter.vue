<template>
  <label class="filter">
    <slot></slot>
    <input checked type="checkbox" v-on:change="$emit('clickCheckbox',$event)">
  </label>
</template>

<script>
  export default {};
</script>

<style scoped>
  .filter:hover {
    font-weight: 600;
    cursor: pointer;
  }

  .filter {
    margin-bottom: 8px;
  }
</style>