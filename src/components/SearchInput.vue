<template>
  <input class="search" placeholder="Search for a character" v-on:input="$emit('search',$event.target.value)"/>
</template>

<script >
  export default  {

  }
</script>

<style scoped>
  .search {
    width: 600px;
  }
</style>