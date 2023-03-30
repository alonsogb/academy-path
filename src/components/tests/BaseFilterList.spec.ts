import BaseFilterList from '../BaseFilterList.vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { getDataTestSelector } from './utils'

describe('BaseFilterList', () => {
  test('renders the passed filters', () => {
    const filters = ['alive', 'dead', 'unknown']
    const wrapper = renderBaseFilterList({ filters })
    expect(wrapper.findAll(getDataTestSelector('filter-item')).length).toBe(3)
  })

  test('allows to customize the slots', () => {
    const filters = ['alive', 'dead', 'unknown']
    const wrapper = renderBaseFilterList(
      { filters },
      {
        default: `<button data-test="filter-button">{{params.filter}}</button>`
      }
    )
    expect(wrapper.findAll(getDataTestSelector('filter-button')).length).toBe(3)
    expect(wrapper.findAll(getDataTestSelector('filter-button'))[0].html()).toBe(
      `<button data-test="filter-button">alive</button>`
    )
    expect(wrapper.findAll(getDataTestSelector('filter-button'))[1].html()).toBe(
      `<button data-test="filter-button">dead</button>`
    )
    expect(wrapper.findAll(getDataTestSelector('filter-button'))[2].html()).toBe(
      `<button data-test="filter-button">unknown</button>`
    )
  })
})

function renderBaseFilterList(props: { filters: string[] }, slots = {}) {
  return mount(BaseFilterList, {
    props,
    slots
  })
}
