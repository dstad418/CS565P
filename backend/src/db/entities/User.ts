import { Entity, Property, Unique, OneToMany, Collection, Cascade } from "@mikro-orm/core";
import { SoftDeletable } from "mikro-orm-soft-delete";
import { DungeonBaseEntity } from "./DungeonBaseEntity.js";
import { Match } from "./Match.js";

import { Enum } from "@mikro-orm/core";
import { Message } from "./Message.js";
import { Pass } from "./Pass.js";

export enum UserRole {
	ADMIN = 'Admin',
	USER = 'User'
}

// All the camapign types in the program
export type campaignName = "Baldur's Gate: Descent into Avernus" | "Candlekeep Mysteries" | "Critical Role: Call of the Netherdeep"
	| "Curse of Strahd" | "Dragonlance: Shadow of the Dragon Queen" | "Dragons of Stormwreck Isle" | "Ghosts of Saltmarsh" | "Ghost of Dragonspear Castle" | "Hoard of the Dragon Queen"
	| "Icewind Dale: Rime of the Frostmaiden" | "Infernal Machine Rebuild" | "Journeys through the Radiant Citadel" | "Keys from the Golden Vault"
	| "Lost Laboratory of Kwalish" | "Lost Mine of Phandelver" | "Out of the Abyss" | "Princes of the Apocalypse" | "Storm King's Thunder" | "Tales from the Yawning Portal"
	| "The Forge of Fury" | "Tomb of Horrors"| "The Rise of Tiamat" | "The Wild Beyond the Witchlight" | "Tomb of Annihilation" | "Tyranny of Dragons" | "Waterdeep: Dragon Heist"
	| "Waterdeep: Dungeon of the Mad Mage";

// State name 2-character abbreviations
export type stateAbbrev = "AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "FL" | "GA" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME"
	| "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "OH" | "OK" | "OR" | "PA" | "RI" | "SC" | "SD"
	| "TN" | "TX" | "UT" | "VT" | "VA" | "WA" | "WV" | "WI" | "WY";

// Either a Dungeon Master or a Player
export type gameRole = "Player" | "Dungeon Master";


// https://github.com/TheNightmareX/mikro-orm-soft-delete
// Yes, it's really that easy.
@SoftDeletable(() => User, "deleted_at", () => new Date())
@Entity({ tableName: "users"})
export class User extends DungeonBaseEntity {
	
	@Property()
	username!: string;
	
	@Property()
	@Unique()
	email!: string;
	
	@Property()
	city!: string;
	
	@Property()
	state!: stateAbbrev;

	@Property()
	password!: string;

	@Property()
	roleInGame!: gameRole;
	
	@Property()
	campaign!: campaignName;
	
	@Property()
	seatsOpen: number = 99;
	
	@Property()
	inactive: boolean = false;

	@Enum(() => UserRole)
	role!: UserRole; // string enum

	// Note that these DO NOT EXIST in the database itself!
	@OneToMany(
		() => Match,
		match => match.owner,
		{cascade: [Cascade.PERSIST, Cascade.REMOVE]}
	)
	matches!: Collection<Match>;

	@OneToMany(
		() => Match,
		match => match.matchee,
		{cascade: [Cascade.PERSIST, Cascade.REMOVE]}
	)
	matched_by!: Collection<Match>;

	@OneToMany(
		() => Pass,
		pass => pass.owner,
		{cascade: [Cascade.PERSIST, Cascade.REMOVE]}
	)
	passes!: Collection<Pass>;

	@OneToMany(
		() => Match,
		pass => pass.matchee,
		{cascade: [Cascade.PERSIST, Cascade.REMOVE]}
	)
	passed_by!: Collection<Pass>;

	// Orphan removal used in our Delete All Sent Messages route to single-step remove via Collection
	@OneToMany(
		() => Message,
		message => message.sender,
		{cascade: [Cascade.PERSIST, Cascade.REMOVE], orphanRemoval: true}
	)
	messages_sent!: Collection<Message>;

	@OneToMany(
		() => Message,
		message => message.receiver,
		{cascade: [Cascade.PERSIST, Cascade.REMOVE], orphanRemoval: true}
	)
	messages_received!: Collection<Message>;
}
