import SimpleFilter from '../SimpleFilter.vue'
import { mount } from '@vue/test-utils'
import { test, expect, describe } from 'vitest'
import { getDataTestSelector, getMockStore } from './utils'

describe('SimpleFilter', () => {
  test('renders the filter label', () => {
    const filter = 'Alive'
    const wrapper = renderSimpleFilter({ filter })
    const element = wrapper.get(getDataTestSelector('filter-button'))
    expect(element.text()).toBe(filter)
  })

  test('stores the filter in the store', async () => {
    const filter = 'Alive'
    const $store = getMockStore()
    const wrapper = renderSimpleFilter({ filter }, { $store })
    const element = wrapper.get(getDataTestSelector('filter-button'))
    await element.trigger('click')
    expect($store.commit).toHaveBeenLastCalledWith('search/setFilter', filter)
  })

  test('dispatches fetch characters', async () => {
    const filter = 'Alive'
    const $store = getMockStore()
    const wrapper = renderSimpleFilter({ filter }, { $store })
    const element = wrapper.get(getDataTestSelector('filter-button'))
    await element.trigger('click')
    expect($store.dispatch).toHaveBeenCalledWith('characters/fetchCharacters')
  })
})

function renderSimpleFilter(props: { filter: string }, mocks?: Record<string, any>) {
  return mount(SimpleFilter, {
    props,
    global: {
      mocks
    }
  })
}
