<template>
  <button @click="setFilter">{{ filter }}</button>
</template>

<script>
export default {
  props: ['filter'],
  methods:{
    setFilter() {
      this.$store.commit('setFilter',this.filter);
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
