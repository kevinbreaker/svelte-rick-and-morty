import type { Character, Info, Episode, Status } from '$types/rickMorty';



export interface GetCharactersParameters {
  page?: number
  name?: string
  status?: Status
}

export interface GetCharactersResponse {
  info: Info
  results: Character[]
}


export interface GetCharacter {
  info: Info
  results: Character
}


export interface GetEpisodes {
  info: Info
  results: Episode[]
}


export interface Test {
  character: Partial<Character>
}
