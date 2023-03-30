<template>
  <button @click="setFilter" data-test="filter-button">{{ filter }}</button>
</template>

<script>
export default {
  props: ['filter'],
  methods:{
    setFilter() {
      this.$store.commit('search/setFilter',this.filter);
      this.$store.dispatch('characters/fetchCharacters');
    }
  }
}
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
