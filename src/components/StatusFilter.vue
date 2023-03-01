<template>
  <label class="filter">
    <slot></slot>
    <input type="radio" v-on:change="$emit('clickCheckbox',$event)" name="status-filter">
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