<template>
  <header class="header">
    <SearchInput v-on:search="search"/>
  </header>
  <div class="container">
    <aside class="facets">
      <h2>Filters</h2>
      <span>Status</span>
      <ul class="filters">
        <li v-for="filter in filters" v-bind:key="filter">
          <StatusFilter v-on:clickCheckbox="changeCheckbox(filter,$event.target.checked)">{{ filter }}</StatusFilter>
        </li>
      </ul>
    </aside>
    <main>
      <section class="characters">
        <CharacterCard v-for="character in visibleCharacters" v-bind:key="character.id" v-bind:character="character"/>
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
        statusCheckboxesActivated: []
      };
    },
    methods: {
      search(event) {
        const query = event.target.value;
        fetch('https://rickandmortyapi.com/api/character/?name=' + query).then(response => response.json())
            .then(data => {
              this.characters = data.results;
              console.log(this.characters);
            });
      },
      changeCheckbox(checkboxValue, checkboxStatus) {
        if (!this.statusCheckboxesActivated.includes(checkboxValue) && !checkboxStatus) {
          this.statusCheckboxesActivated.push(checkboxValue);
        } else {
          this.statusCheckboxesActivated = this.statusCheckboxesActivated.filter(checkbox => checkbox !== checkbox);
        }
      }
    },
    computed: {
      filters() {
        return this.characters?.reduce((filters, character) => filters.add(character.status), new Set()) ?? [];
      },
      visibleCharacters() {
        return this.characters?.filter(character => !this.statusCheckboxesActivated.includes(character.status)) ?? [];
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
