<template>
  <header class="header">
    <SearchInput v-on:search="setQuery"/>
  </header>
  <div class="container">
    <aside class="facets">
      <h2>Filters</h2>
      <span>Status</span>
      <ul class="filters">
        <li v-for="filter in filters.status" v-bind:key="filter">
          <StatusFilter v-on:clickCheckbox="changeCheckbox(filter)">{{ filter }}</StatusFilter>
        </li>
      </ul>
    </aside>
    <main>
      <section class="characters">
        <CharacterCard v-for="character in characters" v-bind:key="character.id" v-bind:character="character"/>
      </section>
    </main>
  </div>
</template>
<script lang="js">
  import CharacterCard from '@/components/CharacterCard.vue';
  import SearchInput from '@/components/SearchInput.vue';
  import StatusFilter from '@/components/StatusFilter.vue';

  export default {
    components: {
      SearchInput,
      CharacterCard,
      StatusFilter
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

  .filters {
    width: 120px;
    list-style-type: none;
  }

  .characters {
    display: flex;
    flex-flow: row wrap;
    list-style-type: none;
    gap: 12px;
  }

  .container {
    display: flex;
  }
</style>
