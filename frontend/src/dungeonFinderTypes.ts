import { campaignName, stateAbbrev, gameRole, User, UserRole } from "../../backend/src/db/entities/User.ts";

export type State = {
	currentProfile: ProfileType;
	likeHistory: Array<ProfileType>;
	passHistory: Array<ProfileType>;
};

export type ProfileType = {
	id: number;
	username: string,
	email: string,
	city: string,
	state: stateAbbrev,
	password: string,
	roleInGame: gameRole,
	campaign: campaignName,
	seatsOpen: number,
	inactive: boolean,
	role: UserRole.USER,
};
