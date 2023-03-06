import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

// Create a new store instance.
const store = createStore({
    state: {
        query: '',
        characters: [],
        filter: ''
    },
    mutations: {
        setCharacters (state, characters){
            state.characters = characters
        },
        setFilter (state, filter){
            state.filter = filter
        },
        setQuery(state,query) {
            state.query = query;
        }
    },
    getters: {
        getCharacters(state){
            return state.characters;
        },
        getFilter(state){
            return state.filter;
        },
    }
})

createApp(App).use(store).mount('#app')
