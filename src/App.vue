<template>
  <header class="header">
    <SearchInput @search="setQuery" />
  </header>
  <div class="container">
    <aside class="facets">
      <h2>Filters</h2>
      <span>Status</span>
      <BaseFilterList :filters="filters.status" v-slot="slotProps">
        <StatusFilter @clickCheckbox="changeCheckbox(slotProps.filter)">{{
          slotProps.filter
        }}</StatusFilter>
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
import StatusFilter from '@/components/StatusFilter.vue';

export default {
  components: {
    SearchInput,
    CharacterCard,
    StatusFilter,
    BaseFilterList,
    BaseGrid
  },
  data() {
    return {
      characters: [],
      query: '',
      status: '',
      url: 'https://rickandmortyapi.com/api/character/',
      /*
       * HACK:
       *  In Empathy Platform every request returns you the filters available, as Rick-&-morty API do not retrieve it we hardcode them here.
       */
      filters: {
        status: ['unknown', 'Alive', 'Dead']
      }
    };
  },
  watch: {
    query() {
      this.search();
    },
    status() {
      this.search();
    }
  },
  methods: {
    setQuery(query) {
      this.query = query;
    },
    search() {
      fetch(this.url + '?name=' + this.query + (this.status ? '&status=' + this.status : '')).then(response => response.json())
          .then(data => {
            this.characters = data.results;
            console.log(this.characters);
          });
    },
    changeCheckbox(checkboxValue) {
      if (this.status === checkboxValue) {
        this.status = '';
      } else {
        this.status = checkboxValue;
      }
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
