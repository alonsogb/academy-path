import { mount } from '@vue/test-utils'
import SearchInput from '../SearchInput.vue'
import { test, expect, describe } from 'vitest'
import { getDataTestSelector, getMockStore } from './utils'

describe('SearchInput', () => {
  test('stores the query', async () => {
    const $store = getMockStore()
    const wrapper = renderSearchInput({ $store })
    const input = wrapper.find(getDataTestSelector('search-input'))
    const query = 'Rick'
    await input.setValue(query)
    await input.trigger('input')
    expect($store.commit).toBeCalledWith('search/setQuery', query)
  })

  test('dispatches fetchCharacters', async () => {
    const $store = getMockStore()
    const wrapper = renderSearchInput({ $store })
    const input = wrapper.find(getDataTestSelector('search-input'))
    await input.setValue('Morty')
    await input.trigger('input')
    expect($store.dispatch).toBeCalledWith('characters/fetchCharacters')
  })
})

function renderSearchInput(mocks?: Record<string, any>) {
  return mount(SearchInput, {
    global: {
      mocks
    }
  })
}
