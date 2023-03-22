export interface RootState {
    characters: CharactersState;
    search: SearchState;
}

export interface CharactersState {
    characters: any[] // TODO: To type properly
}

export interface SearchState {
    query: string;
    filter: string;
}
