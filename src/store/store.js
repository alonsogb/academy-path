import { searchModule } from '@/store/search.module'
import { charactersModule } from '@/store/characters.module'
import { createStore } from 'vuex'

export const store = createStore({
  modules: {
    search: searchModule,
    characters: charactersModule
  }
})
