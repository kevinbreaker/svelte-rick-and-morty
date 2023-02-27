interface Base {
	id: number;
	name: string;
	url: string;
}

export interface CharacterLocation {
	name: string;
	url: string;
}

export type Status = 'Dead' | 'Alive' | 'unknown';
export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface Character extends Base {
	status: Status;
	species: string;
	type: string;
	gender: Gender;
	origin: CharacterLocation;
	location: CharacterLocation;
	image: string;
	episode: string[];
}

export interface Location extends Base {
	type: string;
	dimension: string;
	residents: string[];
}

export interface Episode extends Base {
	air_date: string;
	episode: string;
	characters: string[];
}

export interface Info {
	count: number;
	pages: number;
	next: string | null;
	prev: string | null;
}
