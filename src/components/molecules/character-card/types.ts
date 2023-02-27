import type { Character } from '$types/rickMorty'


export interface Props {
  character?: Character
  isFavorite:boolean
  index: number
}


export interface Dispatchers {
  favorite: Character
}