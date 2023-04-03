function createCharacterStub() {
  return {
    id: Math.floor(Math.random() * 1000),
    name: 'Abradolf Lincler',
    status: 'unknown',
    species: 'Human',
    type: 'Genetic experiment',
    gender: 'Male',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    location: {
      name: 'Testicle Monster Dimension',
      url: 'https://rickandmortyapi.com/api/location/21'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/10',
      'https://rickandmortyapi.com/api/episode/11'
    ],
    url: 'https://rickandmortyapi.com/api/character/7',
    created: '2017-11-04T19:59:20.523Z'
  }
}

export function getApiResponse(amount: number) {
    return Array.from({length: amount}, () => createCharacterStub());
}
