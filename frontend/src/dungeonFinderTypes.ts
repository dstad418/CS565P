import {
	campaignName,
	stateAbbrev,
	gameRole,
	User,
	UserRole,
} from "../../backend/src/db/entities/User.ts";

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
