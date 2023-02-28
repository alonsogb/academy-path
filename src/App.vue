<template>
  <header class="header">
    <input class="search" placeholder="Search for a character"/>
  </header>
  <div class="container">
    <aside class="facets">
      <h2>Filters</h2>
      <span>Status</span>
      <ul class="filters">
        <li class="filter"><label>Alive<input name="filter" type="checkbox"></label></li>
        <li class="filter"><label>Dead<input name="dead" type="checkbox"></label></li>
        <li class="filter"><label>Unknown<input name="unknown" type="checkbox"></label></li>
      </ul>
    </aside>
    <main>
      <section class="characters">
        <article class="character">character 1
          <div class="description">example
            <div class="status alive">alive</div>
          </div>
        </article>
        <article class="character">character 2
          <div class="description">example
            <div class="status alive">alive</div>
          </div>
        </article>
        <article class="character">character 3
          <div class="description">example
            <div class="status alive">alive</div>
          </div>
        </article>
        <article class="character">character 4
          <div class="description">example
            <div class="status alive">alive</div>
          </div>
        </article>
        <article class="character">character 5
          <div class="description">example
            <div class="status alive">alive</div>
          </div>
        </article>
        <article class="character">character 6
          <div class="description">example
            <div class="status alive">alive</div>
          </div>
        </article>
        <article class="character">character 7
          <div class="description">example
            <div class="status alive">alive</div>
          </div>
        </article>
        <article class="character">character 8
          <div class="description">example
            <div class="status alive">alive</div>
          </div>
        </article>
        <article class="character">character 9
          <div class="description">example
            <div class="status alive">alive</div>
          </div>
        </article>
        <article class="character">character 10
          <div class="description">example
            <div class="status alive">alive</div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>
<script lang="js">
  export default {};
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
