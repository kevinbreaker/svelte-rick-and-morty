export type Tab = {
	text: string;
	key: string | number;
};

export type Active = Tab['key'];

export interface Dispatchers {
	active: Active;
}
