<template>
  <article class="character">
    <img class="character__image" v-bind:alt="'character image of '+character.name" v-bind:src="character.image" data-test="character-image">
    <div class="character__description" data-test="character-description"> {{ character.name }}
      <div v-bind:class="['character__status','character__status--'+character.status.toLowerCase()]">{{ character.status }}</div>
    </div>
  </article>
</template>

<script>
  export default {
    props: ['character']
  };
</script>

<style scoped>
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

  .character__description {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .character__status {
    padding: 5px;
    color: white;
  }

  .character__status--alive {
    background: green;
  }

  .character__status--dead {
    background: red;
  }

  .character__status--unknown {
    background: gray;
  }
</style>