/**
 * NOTE: I had so many issues importing User.ts from the backend so that I could get these types, even though everything, on-paper looked good.
 * I know it's messy, and doesn't look great, but I just imported them here and it stopped that compilation error.
 */

export enum UserRole {
	ADMIN = "Admin",
	USER = "User",
}

// All the camapign types in the program
export type campaignName =
	| "Baldur's Gate: Descent into Avernus"
	| "Candlekeep Mysteries"
	| "Critical Role: Call of the Netherdeep"
	| "Curse of Strahd"
	| "Dragonlance: Shadow of the Dragon Queen"
	| "Dragons of Stormwreck Isle"
	| "Ghosts of Saltmarsh"
	| "Ghost of Dragonspear Castle"
	| "Hoard of the Dragon Queen"
	| "Icewind Dale: Rime of the Frostmaiden"
	| "Infernal Machine Rebuild"
	| "Journeys through the Radiant Citadel"
	| "Keys from the Golden Vault"
	| "Lost Laboratory of Kwalish"
	| "Lost Mine of Phandelver"
	| "Out of the Abyss"
	| "Princes of the Apocalypse"
	| "Storm King's Thunder"
	| "Tales from the Yawning Portal"
	| "The Forge of Fury"
	| "Tomb of Horrors"
	| "The Rise of Tiamat"
	| "The Wild Beyond the Witchlight"
	| "Tomb of Annihilation"
	| "Tyranny of Dragons"
	| "Waterdeep: Dragon Heist"
	| "Waterdeep: Dungeon of the Mad Mage";

// State name 2-character abbreviations
export type stateAbbrev =
	| "AL"
	| "AK"
	| "AZ"
	| "AR"
	| "CA"
	| "CO"
	| "CT"
	| "DE"
	| "FL"
	| "GA"
	| "HI"
	| "ID"
	| "IL"
	| "IN"
	| "IA"
	| "KS"
	| "KY"
	| "LA"
	| "ME"
	| "MD"
	| "MA"
	| "MI"
	| "MN"
	| "MS"
	| "MO"
	| "MT"
	| "NE"
	| "NV"
	| "NH"
	| "NJ"
	| "NM"
	| "NY"
	| "NC"
	| "ND"
	| "OH"
	| "OK"
	| "OR"
	| "PA"
	| "RI"
	| "SC"
	| "SD"
	| "TN"
	| "TX"
	| "UT"
	| "VT"
	| "VA"
	| "WA"
	| "WV"
	| "WI"
	| "WY";

// Either a Dungeon Master or a Player
export type gameRole = "Player" | "Dungeon Master";

/**
 * I want to have a like/pass feature IN messages, so i'm going to keep this and hopefully build onto it.
 */
export type State = {
	currentProfile: ProfileType;
	likeHistory: Array<ProfileType>;
	passHistory: Array<ProfileType>;
};

/**
 * Updated Profile type for my project.
 */
export type ProfileType = {
	id: number;
	username: string;
	email: string;
	city: string;
	state: stateAbbrev;
	password: string;
	roleInGame: gameRole;
	campaign: campaignName;
	seatsOpen: number;
	inactive: boolean;
	role: UserRole.USER;
};
