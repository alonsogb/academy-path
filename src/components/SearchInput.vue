<template>
  <input
    class="search"
    placeholder="Search for a character"
    data-test="search-input"
    @input="setQuery($event.target.value)"
  />
</template>

<script>
export default {
  methods: {
    setQuery(query) {
      this.$store.commit('search/setQuery', query)
      this.$store.dispatch('characters/fetchCharacters');
    }
  }
}
</script>

<style scoped>
.search {
  width: 600px;
}
</style>
