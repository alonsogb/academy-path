import { mutations, actions } from '../characters.module'
import { describe, test, expect, vi } from 'vitest'
import { getApiResponse } from './characters-stubs.factory'

describe('characters module mutations', () => {
  test('setCharacters', () => {
    const state = {
      characters: []
    }
    const characters = getApiResponse(5);
    mutations.setCharacters(state, characters)
    expect(state.characters).toBe(characters)
  })
})

describe('characters module actions', async () => {
  function createFetchResponse(data: { results: any[] }) {
    return { ok: true, json: () => new Promise((resolve) => resolve(data)) }
  }
  const results = getApiResponse(10)
  global.fetch = vi.fn().mockResolvedValue(createFetchResponse({ results }))

  test('fetchCharacters', async () => {
    const commit = vi.fn()
    const rootGetters = vi.fn()
    const data = {
      commit,
      rootGetters
    }
    await actions.fetchCharacters({ commit, rootGetters })
    expect(data.commit).toHaveBeenCalledWith('setCharacters', results)
  })
})
