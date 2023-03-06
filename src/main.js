import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

// Create a new store instance.
const store = createStore({
    state: {
        characters: [],
    },
    mutations: {
        setCharacters (state, characters){
            state.characters = characters
        }
    },
    getters: {
        getCharacters(state){
            return state.characters;
        }
    }
})

createApp(App).use(store).mount('#app')
