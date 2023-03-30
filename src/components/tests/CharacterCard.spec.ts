import { mount } from '@vue/test-utils'
import { test, expect, describe } from 'vitest'
import CharacterCard from '../CharacterCard.vue'
import { getDataTestSelector } from './utils'

interface Character {
  name: string
  status: string
  image: string
}

describe('CharacterCard', () => {
  test('renders the description', () => {
    const character: Character = {
      name: 'Rick',
      status: 'alive',
      image: 'https://someimage'
    }
    const wrapper = renderCharacterCard({ character })
    expect(wrapper.find(getDataTestSelector('character-description')).text()).toBe('Rick alive')
  })

  test('renders the image', () => {
    const character: Character = {
      name: 'Rick',
      status: 'alive',
      image: 'https://someimage'
    }
    const wrapper = renderCharacterCard({ character })
    expect(wrapper.find(getDataTestSelector('character-image')).attributes('src')).toBe(
      character.image
    )
    expect(wrapper.find(getDataTestSelector('character-image')).attributes('alt')).toBe(
      `character image of ${character.name}`
    )
  })
})
function renderCharacterCard(props: { character: Character }) {
  return mount(CharacterCard, {
    props
  })
}
