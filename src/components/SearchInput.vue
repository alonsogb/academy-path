<template>
  <input
    class="search"
    placeholder="Search for a character"
    @input="setQuery($event.target.value)"
  />
</template>

<script>
export default {
  methods: {
    setQuery(query) {
      this.$store.commit('setQuery', query)
      this.$store.dispatch('fetchCharacters');
    }
  }
}
</script>

<style scoped>
.search {
  width: 600px;
}
</style>
