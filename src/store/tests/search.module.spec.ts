import { mutations, getters } from '../search.module'
import { describe, test, expect } from 'vitest'

describe('Search module mutations', () => {
  test('set the filter', () => {
    const state = {
      filter: ''
    }
    mutations.setFilter(state, 'alive')
    expect(state.filter).toBe('alive')
    mutations.setFilter(state, 'dead')
    expect(state.filter).toBe('dead')
  })

  test('set the query', () => {
    const state = {
      query: ''
    }
    mutations.setQuery(state, 'rick')
    expect(state.query).toBe('rick')
    mutations.setQuery(state, 'morty')
    expect(state.query).toBe('morty')
  })
})

describe('Search module getters', () => {
  test('getParams', () => {
    const state = {
      filter: 'dead',
      query: 'rick'
    }
    expect(getters.getParams(state)).toBe(`name=rick&status=dead`)
    state.filter = 'alive',
    state.query ='morty'
    expect(getters.getParams(state)).toBe(`name=morty&status=alive`)
  })
})
