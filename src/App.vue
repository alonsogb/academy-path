<template>
  <header class="header">
    <SearchInput />
  </header>
  <div class="container">
    <aside class="facets">
      <h2>Filters</h2>
      <span>Status</span>
      <BaseFilterList :filters="filters.status" #default="{ filter }">
        <SimpleFilter :filter="filter" />
      </BaseFilterList>
    </aside>
    <main>
      <BaseGrid>
        <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
      </BaseGrid>
    </main>
  </div>
</template>
<script lang="js">
import BaseFilterList from '@/components/BaseFilterList.vue';
import BaseGrid from '@/components/BaseGrid.vue';
import CharacterCard from '@/components/CharacterCard.vue';
import SearchInput from '@/components/SearchInput.vue';
import SimpleFilter from '@/components/SimpleFilter.vue';

export default {
  components: {
    SearchInput,
    CharacterCard,
    SimpleFilter,
    BaseFilterList,
    BaseGrid
  },
  data() {
    return {
      /*
       * HACK:
       *  In Empathy Platform every request returns you the filters available, as Rick-&-morty API do not retrieve it we hardcode them here.
       */
      filters: {
        status: ['unknown', 'Alive', 'Dead']
      }
    };
  },
  mounted() {
    this.$store.dispatch('characters/fetchCharacters');
  },
  computed: {
    characters() {
      return this.$store.getters['characters/getCharacters'];
    }
  }
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
}
</style>
