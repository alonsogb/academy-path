<template>
  <header class="header">
    <input class="search" placeholder="Search for a character" @input="search"/>
  </header>
  <div class="container">
    <aside class="facets">
      <h2>Filters</h2>
      <span>Status</span>
      <ul class="filters">
        <li v-for="filter in filters" v-bind:key="filter" class="filter">
          <label>
            {{ filter }}<input checked type="checkbox" @change="changeCheckbox(filter,$event.target.checked)">
          </label>
        </li>
      </ul>
    </aside>
    <main>
      <section class="characters">
        <article v-for="character in visibleCharacters" v-bind:key="character.id" class="character">
          <img class="character__image" v-bind:alt="'character image of'+character.name" v-bind:src="character.image">
          <div class="description"> {{ character.name }}
            <div v-bind:class="['status',character.status.toLowerCase()]">{{ character.status }}</div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>
<script lang="js">
  export default {
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
        return this.characters.filter(character => !this.statusCheckboxesActivated.includes(character.status));
      }
    }
  };
</script>
<style scoped>
  .header {
    display: flex;
    justify-content: center;
  }

  .search {
    width: 600px;
  }

  .characters {
    display: flex;
    flex-flow: row wrap;
    list-style-type: none;
    gap: 12px;

  }

  .character {
    display: flex;
    flex-flow: column;
    width: 250px;
    height: 350px;
    border: 1px solid black;
  }

  .character__image {
    height: 100%;
    object-fit: cover;
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .status {
    padding: 5px;
    color: white;
  }

  .alive {
    background: green;
  }

  .dead {
    background: red;
  }

  .unknown {
    background: gray;
  }

  .filters {
    width: 120px;
    list-style-type: none;
  }

  .filter:hover {
    font-weight: 600;
    cursor: pointer;
  }

  .filter {
    margin-bottom: 8px;
  }

  .container {
    display: flex;
  }
</style>
