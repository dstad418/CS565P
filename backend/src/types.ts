import { campaignName, stateAbbrev, gameRole } from "./db/entities/User.js";

export type ICreateUsersBody = {
	username: string,
	email: string,
	city: string,
	state: stateAbbrev,
	password: string,
	roleInGame: gameRole,
	campaign: campaignName,
	seatsOpen: number,
	inactive: boolean,
}

export type IUpdateUsersBody = {
	id: number,
	username: string,
	city: string,
	state: stateAbbrev,
	campaign: campaignName,
	roleInGame: gameRole,
	seatsOpen: number,
}

export type ICreateMessage = {
	sender_id: number,
	receiver_id: number,
	message: string,
}
