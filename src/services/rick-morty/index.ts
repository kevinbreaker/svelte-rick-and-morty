import { fetch } from '../index';
import type { GetCharactersResponse, GetCharactersParameters } from './types';

const baseURL = 'https://rickandmortyapi.com/api';

export function getCharacters(filters?: GetCharactersParameters) {
	return fetch<GetCharactersResponse>({
		baseURL,
		path: 'character',
		params: {
			limit: 20,
			page: filters?.page ?? 1
		}
	});
}
