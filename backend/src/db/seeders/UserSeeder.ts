import type { Dictionary, EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import { User, UserRole } from "../entities/User.js";
import bcrypt from "bcrypt";

/**
 * User Seeder
 * Will set Player seatsOpen variables to 99m and by default, all inactive statuses will be set to false.
 * As Dungeon Master's fill up their games, once they run out of empty seats by accepting players, their
 * status will be set to inactive. My hope is that when this happens, a modal or an alert will pop up telling the DM
 * that they've filled their table, and that they can reactive at any time.
 */
export class UserSeeder extends Seeder {
	async run(em: EntityManager, context: Dictionary): Promise<void> {
		const hashedPw = await bcrypt.hash("password", 10);

		// https://mikro-orm.io/docs/seeding#shared-context
		context.user1 = em.create(User, {
			username: "Malvin Hasnip",
			email: "email@email.com",
			city: "Seattle",
			state: "WA",
			password: "hashedPw",
			roleInGame: "Player",
			campaign: "Tales from the Yawning Portal",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.ADMIN,
		});

		context.user2 = em.create(User, {
			username: "Tiebold Challenor",
			email: "tchallenor1@naver.com",
			city: "Seattle",
			state: "WA",
			password: "of23avl",
			roleInGame: "Dungeon Master",
			campaign: "Dragonlance: Shadow of the Dragon Queen",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user3 = em.create(User, {
			username: "Alia Clare",
			email: "aclare2@t.co",
			city: "Seattle",
			state: "WA",
			password: "pgcEQ9NEPpA",
			roleInGame: "Player",
			campaign: "Waterdeep: Dungeon of the Mad Mage",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user4 = em.create(User, {
			username: "Stearne Cornthwaite",
			email: "scornthwaite27@altervista.org",
			city: "Little Rock",
			state: "AR",
			password: "L...",
			roleInGame: "Player",
			campaign: "Tyranny of Dragons",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user5 = em.create(User, {
			username: "Gertrudis Kitchenham",
			email: "gkitchenham1e@macromedia.com",
			city: "Spokane",
			state: "WA",
			password: "KVa2xhEeTw9",
			roleInGame: "Player",
			campaign: "Keys from the Golden Vault",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user6 = em.create(User, {
			username: "Johan O'Fogarty",
			email: "jofogarty1f@google.com.hk",
			city: "Spokane",
			state: "WA",
			password: "vaKzTv9te6n",
			roleInGame: "Player",
			campaign: "Out of the Abyss",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user7 = em.create(User, {
			username: "Valerie Doncom",
			email: "vdoncom1g@symantec.com",
			city: "Spokane",
			state: "WA",
			password: "eVKJ1Z",
			roleInGame: "Player",
			campaign: "Keys from the Golden Vault",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user8 = em.create(User, {
			username: "Kaiser Rider",
			email: "krider1h@webnode.com",
			city: "Portland",
			state: "OR",
			password: "ZXT2KjyiN",
			roleInGame: "Player",
			campaign: "Icewind Dale: Rime of the Frostmaiden",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user9 = em.create(User, {
			username: "Ralina Hellis",
			email: "rhellis1i@tinypic.com",
			city: "Vancouver",
			state: "WA",
			password: "3EDk5yfObNPA",
			roleInGame: "Player",
			campaign: "Baldur's Gate: Descent into Avernus",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user10 = em.create(User, {
			username: "Thedrick Cahani",
			email: "tcahani1j@hatena.ne.jp",
			city: "Seattle",
			state: "WA",
			password: "Xrm4UE",
			roleInGame: "Dungeon Master",
			campaign: "Dragonlance: Shadow of the Dragon Queen",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user11 = em.create(User, {
			username: "Shantee Inworth",
			email: "sinworth1k@deliciousdays.com",
			city: "Tacoma",
			state: "WA",
			password: "7ZH2fbRC",
			roleInGame: "Player",
			campaign: "Curse of Strahd",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user12 = em.create(User, {
			username: "Frannie Rodolfi",
			email: "frodolfi1l@is.gd",
			city: "Portland",
			state: "OR",
			password: "oGVpSPYHGI",
			roleInGame: "Player",
			campaign: "Storm King's Thunder",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user13 = em.create(User, {
			username: "Kendra Blake",
			email: "kblake1m@example.com",
			city: "Seattle",
			state: "WA",
			password: "pG9FwSjDm",
			roleInGame: "Player",
			campaign: "Tomb of Annihilation",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user14 = em.create(User, {
			username: "Dexter McCoy",
			email: "dmccoy1n@example.com",
			city: "Vancouver",
			state: "WA",
			password: "f5nG4PjKz",
			roleInGame: "Player",
			campaign: "Waterdeep: Dragon Heist",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user15 = em.create(User, {
			username: "Mara Ramsey",
			email: "mramsey1o@example.com",
			city: "Spokane",
			state: "WA",
			password: "sN4JYghv2",
			roleInGame: "Player",
			campaign: "Ghosts of Saltmarsh",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user16 = em.create(User, {
			username: "Riley Abbott",
			email: "rabbott1p@example.com",
			city: "Tacoma",
			state: "WA",
			password: "WZo8cFub1",
			roleInGame: "Player",
			campaign: "Lost Mine of Phandelver",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user17 = em.create(User, {
			username: "Leona Fletcher",
			email: "lfletcher1q@example.com",
			city: "Portland",
			state: "OR",
			password: "bDy7HpKXz",
			roleInGame: "Player",
			campaign: "Princes of the Apocalypse",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user18 = em.create(User, {
			username: "Darius Quinn",
			email: "dquinn1r@example.com",
			city: "Seattle",
			state: "WA",
			password: "mX3TfR6aP",
			roleInGame: "Dungeon Master",
			campaign: "The Rise of Tiamat",
			seatsOpen: 2,
			inactive: false,
			role: UserRole.USER,
		});

		context.user19 = em.create(User, {
			username: "Isabel Carpenter",
			email: "icarpenter1s@example.com",
			city: "Vancouver",
			state: "WA",
			password: "vG7YjTkDz",
			roleInGame: "Player",
			campaign: "Hoard of the Dragon Queen",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user20 = em.create(User, {
			username: "Gavin Reid",
			email: "greid1t@example.com",
			city: "Spokane",
			state: "WA",
			password: "hT4EpKqWx",
			roleInGame: "Player",
			campaign: "Ghost of Dragonspear Castle",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user21 = em.create(User, {
			username: "Emerson Patterson",
			email: "epatterson1u@example.com",
			city: "Tacoma",
			state: "WA",
			password: "lJ1SfD3cM",
			roleInGame: "Player",
			campaign: "Storm King's Thunder",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user22 = em.create(User, {
			username: "Layla Holmes",
			email: "lholmes1v@example.com",
			city: "Portland",
			state: "OR",
			password: "kN6GhTsVf",
			roleInGame: "Player",
			campaign: "Out of the Abyss",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user23 = em.create(User, {
			username: "Kendra Blake",
			email: "kblake22@example.com",
			city: "Seattle",
			state: "WA",
			password: "pG9FwSjDm",
			roleInGame: "Dungeon Master",
			campaign: "Tomb of Annihilation",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user24 = em.create(User, {
			username: "Dexter McCoy",
			email: "dmc11coy1n@example.com",
			city: "Vancouver",
			state: "WA",
			password: "f5nG4PjKz",
			roleInGame: "Dungeon Master",
			campaign: "Waterdeep: Dragon Heist",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user25 = em.create(User, {
			username: "Mara Ramsey",
			email: "mramsey111o@example.com",
			city: "Spokane",
			state: "WA",
			password: "sN4JYghv2",
			roleInGame: "Dungeon Master",
			campaign: "Ghosts of Saltmarsh",
			seatsOpen: 6,
			inactive: false,
			role: UserRole.USER,
		});

		context.user26 = em.create(User, {
			username: "Riley Abbott",
			email: "rabb11ott1p@example.com",
			city: "Tacoma",
			state: "WA",
			password: "WZo8cFub1",
			roleInGame: "Dungeon Master",
			campaign: "Lost Mine of Phandelver",
			seatsOpen: 5,
			inactive: false,
			role: UserRole.USER,
		});

		context.user27 = em.create(User, {
			username: "Leona Fletcher",
			email: "l23fletcher1q@example.com",
			city: "Portland",
			state: "OR",
			password: "bDy7HpKXz",
			roleInGame: "Dungeon Master",
			campaign: "Princes of the Apocalypse",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user28 = em.create(User, {
			username: "Darius Quinn",
			email: "dquin44n1r@example.com",
			city: "Seattle",
			state: "WA",
			password: "mX3TfR6aP",
			roleInGame: "Dungeon Master",
			campaign: "The Rise of Tiamat",
			seatsOpen: 2,
			inactive: false,
			role: UserRole.USER,
		});

		context.user29 = em.create(User, {
			username: "Isabel Carpenter",
			email: "icarpenter21s@example.com",
			city: "Vancouver",
			state: "WA",
			password: "vG7YjTkDz",
			roleInGame: "Dungeon Master",
			campaign: "Hoard of the Dragon Queen",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user30 = em.create(User, {
			username: "Gavin Reid",
			email: "greid211t@example.com",
			city: "Spokane",
			state: "WA",
			password: "hT4EpKqWx",
			roleInGame: "Dungeon Master",
			campaign: "Ghost of Dragonspear Castle",
			seatsOpen: 6,
			inactive: false,
			role: UserRole.USER,
		});

		context.user31 = em.create(User, {
			username: "Emerson Greene",
			email: "egre4ene1u@example.com",
			city: "Tacoma",
			state: "WA",
			password: "lJ1SfD3cM",
			roleInGame: "Dungeon Master",
			campaign: "Curse of Strahd",
			seatsOpen: 5,
			inactive: false,
			role: UserRole.USER,
		});

		context.user32 = em.create(User, {
			username: "Layla Holmes",
			email: "lhol55mes1v@example.com",
			city: "Portland",
			state: "OR",
			password: "kN6GhTsVf",
			roleInGame: "Dungeon Master",
			campaign: "Out of the Abyss",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user33 = em.create(User, {
			username: "Natalie Sullivan",
			email: "nsull8ivan28@example.com",
			city: "Seattle",
			state: "WA",
			password: "pG9FwSjDm",
			roleInGame: "Dungeon Master",
			campaign: "Tomb of Annihilation",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user34 = em.create(User, {
			username: "Jordan Graham",
			email: "jg3raham29@example.com",
			city: "Vancouver",
			state: "WA",
			password: "f5nG4PjKz",
			roleInGame: "Dungeon Master",
			campaign: "Waterdeep: Dragon Heist",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user35 = em.create(User, {
			username: "Alexis Patel",
			email: "apat4el30@example.com",
			city: "Spokane",
			state: "WA",
			password: "sN4JYghv2",
			roleInGame: "Dungeon Master",
			campaign: "Ghosts of Saltmarsh",
			seatsOpen: 6,
			inactive: false,
			role: UserRole.USER,
		});

		context.user36 = em.create(User, {
			username: "Taylor Hawkins",
			email: "thawk5ins31@example.com",
			city: "Tacoma",
			state: "WA",
			password: "WZo8cFub1",
			roleInGame: "Dungeon Master",
			campaign: "Lost Mine of Phandelver",
			seatsOpen: 5,
			inactive: false,
			role: UserRole.USER,
		});

		context.user37 = em.create(User, {
			username: "Parker Evans",
			email: "pevan6s32@example.com",
			city: "Portland",
			state: "OR",
			password: "bDy7HpKXz",
			roleInGame: "Dungeon Master",
			campaign: "Princes of the Apocalypse",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user38 = em.create(User, {
			username: "Harper Bailey",
			email: "hbai8ley33@example.com",
			city: "Seattle",
			state: "WA",
			password: "mX3TfR6aP",
			roleInGame: "Dungeon Master",
			campaign: "The Rise of Tiamat",
			seatsOpen: 2,
			inactive: false,
			role: UserRole.USER,
		});

		context.user39 = em.create(User, {
			username: "Hayden Wright",
			email: "hwrigh1111t34@example.com",
			city: "Vancouver",
			state: "WA",
			password: "vG7YjTkDz",
			roleInGame: "Dungeon Master",
			campaign: "Hoard of the Dragon Queen",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user40 = em.create(User, {
			username: "Cameron Turner",
			email: "cturncer35@example.com",
			city: "Spokane",
			state: "WA",
			password: "hT4EpKqWx",
			roleInGame: "Dungeon Master",
			campaign: "Ghost of Dragonspear Castle",
			seatsOpen: 6,
			inactive: false,
			role: UserRole.USER,
		});

		context.user41 = em.create(User, {
			username: "Alexandria Long",
			email: "alongd36@example.com",
			city: "Tacoma",
			state: "WA",
			password: "jB8RnKuG5",
			roleInGame: "Dungeon Master",
			campaign: "Storm King's Thunder",
			seatsOpen: 5,
			inactive: false,
			role: UserRole.USER,
		});

		context.user42 = em.create(User, {
			username: "Skyler Reed",
			email: "srgeed37@example.com",
			city: "Portland",
			state: "OR",
			password: "dM2ZgVaX9",
			roleInGame: "Dungeon Master",
			campaign: "The Forge of Fury",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user43 = em.create(User, {
			username: "Bailey Myers",
			email: "bmyyers38@example.com",
			city: "Seattle",
			state: "WA",
			password: "kD6EwVzP7",
			roleInGame: "Dungeon Master",
			campaign: "Curse of Strahd",
			seatsOpen: 2,
			inactive: false,
			role: UserRole.USER,
		});

		context.user44 = em.create(User, {
			username: "Peyton Richardson",
			email: "pricharidson39@example.com",
			city: "Vancouver",
			state: "WA",
			password: "sR3VtCmN2",
			roleInGame: "Dungeon Master",
			campaign: "Out of the Abyss",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user45 = em.create(User, {
			username: "Hayden Cox",
			email: "hcorx40@example.com",
			city: "Spokane",
			state: "WA",
			password: "gB5HsYjR8",
			roleInGame: "Dungeon Master",
			campaign: "Tales from the Yawning Portal",
			seatsOpen: 6,
			inactive: false,
			role: UserRole.USER,
		});

		context.user46 = em.create(User, {
			username: "Avery Wright",
			email: "awripght41@example.com",
			city: "Tacoma",
			state: "WA",
			password: "wS9MkXnD3",
			roleInGame: "Dungeon Master",
			campaign: "Tomb of Horrors",
			seatsOpen: 5,
			inactive: false,
			role: UserRole.USER,
		});

		context.user47 = em.create(User, {
			username: "Alexis Simmons",
			email: "asimmoins42@example.com",
			city: "Portland",
			state: "OR",
			password: "vB8HnWxP6",
			roleInGame: "Dungeon Master",
			campaign: "Ghosts of Saltmarsh",
			seatsOpen: 5,
			inactive: false,
			role: UserRole.USER,
		});

		context.user48 = em.create(User, {
			username: "Morgan Richardson",
			email: "mricharjdson43@example.com",
			city: "Seattle",
			state: "WA",
			password: "dN2WtRmY7",
			roleInGame: "Dungeon Master",
			campaign: "Hoard of the Dragon Queen",
			seatsOpen: 2,
			inactive: false,
			role: UserRole.USER,
		});

		context.user49 = em.create(User, {
			username: "Cameron Cox",
			email: "ccozx44@example.com",
			city: "Vancouver",
			state: "WA",
			password: "qV6BsXmN8",
			roleInGame: "Dungeon Master",
			campaign: "Princes of the Apocalypse",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user50 = em.create(User, {
			username: "Harper Bell",
			email: "hbeall45@example.com",
			city: "Spokane",
			state: "WA",
			password: "fT4SnKqD9",
			roleInGame: "Dungeon Master",
			campaign: "Waterdeep: Dragon Heist",
			seatsOpen: 6,
			inactive: false,
			role: UserRole.USER,
		});

		context.user51 = em.create(User, {
			username: "Riley Wright",
			email: "rwrisght46@example.com",
			city: "Tacoma",
			state: "WA",
			password: "jR7XpVzH5",
			roleInGame: "Dungeon Master",
			campaign: "Baldur's Gate: Descent into Avernus",
			seatsOpen: 5,
			inactive: false,
			role: UserRole.USER,
		});

		context.user52 = em.create(User, {
			username: "Parker Simmons",
			email: "psimmvons47@example.com",
			city: "Portland",
			state: "OR",
			password: "lT5GsVqZ9",
			roleInGame: "Dungeon Master",
			campaign: "Icewind Dale: Rime of the Frostmaiden",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user53 = em.create(User, {
			username: "Blake Peterson",
			email: "bpeteruson48@example.com",
			city: "Seattle",
			state: "WA",
			password: "rE9JuZxV4",
			roleInGame: "Dungeon Master",
			campaign: "Storm King's Thunder",
			seatsOpen: 2,
			inactive: false,
			role: UserRole.USER,
		});

		context.user54 = em.create(User, {
			username: "Taylor Martinez",
			email: "tmartin4ez49@example.com",
			city: "Vancouver",
			state: "WA",
			password: "aD6KsYjR2",
			roleInGame: "Dungeon Master",
			campaign: "Ghosts of Saltmarsh",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user55 = em.create(User, {
			username: "Jordan Thompson",
			email: "jthombpson50@example.com",
			city: "Spokane",
			state: "WA",
			password: "wH4XtRvM3",
			roleInGame: "Dungeon Master",
			campaign: "Curse of Strahd",
			seatsOpen: 6,
			inactive: false,
			role: UserRole.USER,
		});

		context.user56 = em.create(User, {
			username: "Logan Baker",
			email: "lbdaker51@example.com",
			city: "Tacoma",
			state: "WA",
			password: "gB5HnYvT8",
			roleInGame: "Dungeon Master",
			campaign: "Out of the Abyss",
			seatsOpen: 5,
			inactive: false,
			role: UserRole.USER,
		});

		context.user57 = em.create(User, {
			username: "Carter Allen",
			email: "callen52@example.com",
			city: "Portland",
			state: "OR",
			password: "vB8WsRnM6",
			roleInGame: "Dungeon Master",
			campaign: "Tomb of Annihilation",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user58 = em.create(User, {
			username: "Mason Nelson",
			email: "mnelson53@example.com",
			city: "Seattle",
			state: "WA",
			password: "dN2KmHbR7",
			roleInGame: "Dungeon Master",
			campaign: "Hoard of the Dragon Queen",
			seatsOpen: 2,
			inactive: false,
			role: UserRole.USER,
		});

		context.user59 = em.create(User, {
			username: "Evan Hill",
			email: "ehill54@example.com",
			city: "Vancouver",
			state: "WA",
			password: "qV6BsZmP8",
			roleInGame: "Dungeon Master",
			campaign: "Princes of the Apocalypse",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user60 = em.create(User, {
			username: "Dylan Carter",
			email: "dcarter55@example.com",
			city: "Spokane",
			state: "WA",
			password: "fT4QnLpK9",
			roleInGame: "Dungeon Master",
			campaign: "Waterdeep: Dragon Heist",
			seatsOpen: 6,
			inactive: false,
			role: UserRole.USER,
		});

		context.user61 = em.create(User, {
			username: "Tyler Turner",
			email: "tturner56@example.com",
			city: "Tacoma",
			state: "WA",
			password: "hD9FpMkQ5",
			roleInGame: "Dungeon Master",
			campaign: "Lost Mine of Phandelver",
			seatsOpen: 5,
			inactive: false,
			role: UserRole.USER,
		});

		context.user62 = em.create(User, {
			username: "Brandon Parker",
			email: "bparker57@example.com",
			city: "Portland",
			state: "OR",
			password: "yR7GtNjA6",
			roleInGame: "Dungeon Master",
			campaign: "The Rise of Tiamat",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user63 = em.create(User, {
			username: "Austin Wright",
			email: "awright58@example.com",
			city: "Seattle",
			state: "WA",
			password: "pM5DgZqT4",
			roleInGame: "Dungeon Master",
			campaign: "Baldur's Gate: Descent into Avernus",
			seatsOpen: 2,
			inactive: false,
			role: UserRole.USER,
		});

		context.user64 = em.create(User, {
			username: "Justin Reed",
			email: "jreed59@example.com",
			city: "Vancouver",
			state: "WA",
			password: "tR7YsUvB2",
			roleInGame: "Dungeon Master",
			campaign: "Tales from the Yawning Portal",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user65 = em.create(User, {
			username: "Ryan Cook",
			email: "rcook60@example.com",
			city: "Spokane",
			state: "WA",
			password: "nF8MjKbZ3",
			roleInGame: "Dungeon Master",
			campaign: "Ghosts of Saltmarsh",
			seatsOpen: 6,
			inactive: false,
			role: UserRole.USER,
		});

		context.user66 = em.create(User, {
			username: "Eric Martinez",
			email: "emartinez61@example.com",
			city: "Tacoma",
			state: "WA",
			password: "jK9YhVdR6",
			roleInGame: "Dungeon Master",
			campaign: "Curse of Strahd",
			seatsOpen: 5,
			inactive: false,
			role: UserRole.USER,
		});

		context.user67 = em.create(User, {
			username: "Kyle Roberts",
			email: "kroberts62@example.com",
			city: "Portland",
			state: "OR",
			password: "mN6GtPbH5",
			roleInGame: "Dungeon Master",
			campaign: "Out of the Abyss",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user68 = em.create(User, {
			username: "Joshua Rodriguez",
			email: "jrodriguez63@example.com",
			city: "Seattle",
			state: "WA",
			password: "lS2BnXcV3",
			roleInGame: "Dungeon Master",
			campaign: "Tomb of Annihilation",
			seatsOpen: 2,
			inactive: false,
			role: UserRole.USER,
		});

		context.user69 = em.create(User, {
			username: "Nathan Ramirez",
			email: "nramirez64@example.com",
			city: "Vancouver",
			state: "WA",
			password: "xW5JpRvT9",
			roleInGame: "Dungeon Master",
			campaign: "Hoard of the Dragon Queen",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user70 = em.create(User, {
			username: "Kevin Morris",
			email: "kmorris65@example.com",
			city: "Spokane",
			state: "WA",
			password: "rQ4WgFpS8",
			roleInGame: "Dungeon Master",
			campaign: "Princes of the Apocalypse",
			seatsOpen: 6,
			inactive: false,
			role: UserRole.USER,
		});

		context.user71 = em.create(User, {
			username: "Daniel Lewis",
			email: "dlewis66@example.com",
			city: "Tacoma",
			state: "WA",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Storm King's Thunder",
			seatsOpen: 5,
			inactive: false,
			role: UserRole.USER,
		});

		context.user72 = em.create(User, {
			username: "Anthony Hill",
			email: "ahill67@example.com",
			city: "Portland",
			state: "OR",
			password: "dC7KmVbT6",
			roleInGame: "Dungeon Master",
			campaign: "Waterdeep: Dragon Heist",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user73 = em.create(User, {
			username: "Christos Simes",
			email: "csim3esp0@ifeng.com",
			city: "Little Rock",
			state: "AR",
			password: "uawaimx8Vswb",
			roleInGame: "Dungeon Master",
			campaign: "Baldur's Gate: Descent into Avernus",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user74 = em.create(User, {
			username: "Price Bertson",
			email: "pbert1sonp1@gizmodo.com",
			city: "Little Rock",
			state: "AR",
			password: "liEOXNwGbC",
			roleInGame: "Dungeon Master",
			campaign: "Tyranny of Dragons",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user75 = em.create(User, {
			username: "Christos Simes",
			email: "csimesp0@ifeng.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Storm King's Thunder",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user76 = em.create(User, {
			username: "Price Bertson",
			email: "pber78tsonp1@gizmodo.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Tyranny of Dragons",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user77 = em.create(User, {
			username: "Amil Deverock",
			email: "adeve8rockp2@nationalgeographic.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Tales from the Yawning Portal",
			seatsOpen: 2,
			inactive: false,
			role: UserRole.USER,
		});

		context.user78 = em.create(User, {
			username: "Venita Renshell",
			email: "vr0enshellp3@indiegogo.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Out of the Abyss",
			seatsOpen: 5,
			inactive: false,
			role: UserRole.USER,
		});

		context.user79 = em.create(User, {
			username: "Jethro Ephson",
			email: "jep7hsonp4@cnet.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Lost Laboratory of Kwalish",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user80 = em.create(User, {
			username: "Kain Manthroppe",
			email: "kmanthro33ppep5@dedecms.com",
			city: "Salem",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Waterdeep: Dungeon of the Mad Mage",
			seatsOpen: 1,
			inactive: false,
			role: UserRole.USER,
		});

		context.user81 = em.create(User, {
			username: "Jeanna Nuccii",
			email: "jnucccciip6@senate.gov",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Waterdeep: Dragon Heist",
			seatsOpen: 1,
			inactive: false,
			role: UserRole.USER,
		});

		context.user82 = em.create(User, {
			username: "Doe Durran",
			email: "ddusrranp7@house.gov",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Curse of Strahd",
			seatsOpen: 1,
			inactive: false,
			role: UserRole.USER,
		});

		context.user83 = em.create(User, {
			username: "Leontyne Lindl",
			email: "llinddlp8@fda.gov",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Ghosts of Saltmarsh",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user84 = em.create(User, {
			username: "Rutledge Cullin",
			email: "rcuaallinp9@epa.gov",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Ghosts of Saltmarsh",
			seatsOpen: 2,
			inactive: false,
			role: UserRole.USER,
		});

		context.user85 = em.create(User, {
			username: "Alessa Rendell",
			email: "arenndellpa@ap.org",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Player",
			campaign: "Tomb of Annihilation",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user86 = em.create(User, {
			username: "Gideon Kingswood",
			email: "gkimngswoodpb@amazon.co.uk",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Player",
			campaign: "Princes of the Apocalypse",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user87 = em.create(User, {
			username: "Sabrina Moreshead",
			email: "smorelsheadpc@theguardian.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Player",
			campaign: "Hoard of the Dragon Queen",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user88 = em.create(User, {
			username: "Cedric Gooderridge",
			email: "cgoodpperridgepd@telegraph.co.uk",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Player",
			campaign: "Out of the Abyss",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user89 = em.create(User, {
			username: "Isidore Ramsbottom",
			email: "iraumsbouttompe@bbc.co.uk",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Player",
			campaign: "Waterdeep: Dragon Heist",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user90 = em.create(User, {
			username: "Edric Marsh",
			email: "ematrshpf@foxnews.com",
			city: "Salem",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Player",
			campaign: "Curse of Strahd",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user91 = em.create(User, {
			username: "Theresa Worsfield",
			email: "tworsfrieldpg@buzzfeed.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Player",
			campaign: "Ghosts of Saltmarsh",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user92 = em.create(User, {
			username: "Malcolm Hawksley",
			email: "mhawksleasyph@usatoday.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Player",
			campaign: "Ghosts of Saltmarsh",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user93 = em.create(User, {
			username: "Lara Collard",
			email: "lcolldardpi@nytimes.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Player",
			campaign: "Tomb of Annihilation",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user94 = em.create(User, {
			username: "Dexter Sheircliffe",
			email: "daaasheircliffepj@theguardian.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Player",
			campaign: "Princes of the Apocalypse",
			seatsOpen: 99,
			inactive: false,
			role: UserRole.USER,
		});

		context.user95 = em.create(User, {
			username: "Evelyn Hartman",
			email: "ehartm3dfanpk@example.com",
			city: "Austin",
			state: "TX",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Lost Mine of Phandelver",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user96 = em.create(User, {
			username: "Nathaniel Sloan",
			email: "nst56loanpl@example.com",
			city: "Austin",
			state: "TX",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Storm King's Thunder",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user97 = em.create(User, {
			username: "Margaret Harrington",
			email: "mha9urringtonpm@example.com",
			city: "Austin",
			state: "TX",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Out of the Abyss",
			seatsOpen: 2,
			inactive: false,
			role: UserRole.USER,
		});

		context.user98 = em.create(User, {
			username: "Vincent Douglas",
			email: "vdouglas3dpn@example.com",
			city: "Austin",
			state: "TX",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Curse of Strahd",
			seatsOpen: 5,
			inactive: false,
			role: UserRole.USER,
		});

		context.user99 = em.create(User, {
			username: "Lydia Carpenter",
			email: "yup@example.com",
			city: "Austin",
			state: "TX",
			password: "yup",
			roleInGame: "Dungeon Master",
			campaign: "Tomb of Annihilation",
			seatsOpen: 2,
			inactive: false,
			role: UserRole.USER,
		});

		context.user100 = em.create(User, {
			username: "Simon Reeves",
			email: "sre2devespp@example.com",
			city: "Austin",
			state: "TX",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Waterdeep: Dragon Heist",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user101 = em.create(User, {
			username: "Olivia Barton",
			email: "obarto336npq@example.com",
			city: "Austin",
			state: "TX",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Ghosts of Saltmarsh",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user102 = em.create(User, {
			username: "Dominic Griffiths",
			email: "dgriff7hithspr@example.com",
			city: "Austin",
			state: "TX",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Princes of the Apocalypse",
			seatsOpen: 2,
			inactive: false,
			role: UserRole.USER,
		});

		context.user103 = em.create(User, {
			username: "William Thompson",
			email: "wthov6mpsonqa@example.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Princes of the Apocalypse",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user104 = em.create(User, {
			username: "Emma Turner",
			email: "eturb7nerqb@example.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Waterdeep: Dragon Heist",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user105 = em.create(User, {
			username: "Daniel Patterson",
			email: "dpatte8brsonqc@example.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Ghosts of Saltmarsh",
			seatsOpen: 2,
			inactive: false,
			role: UserRole.USER,
		});

		context.user106 = em.create(User, {
			username: "Olivia Mitchell",
			email: "omitch1dellqd@example.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Curse of Strahd",
			seatsOpen: 5,
			inactive: false,
			role: UserRole.USER,
		});

		context.user107 = em.create(User, {
			username: "Andrew Lewis",
			email: "alewid2sqe@example.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Tomb of Annihilation",
			seatsOpen: 6,
			inactive: false,
			role: UserRole.USER,
		});

		context.user108 = em.create(User, {
			username: "Sophia Walker",
			email: "swalkercxqf@example.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Lost Mine of Phandelver",
			seatsOpen: 3,
			inactive: false,
			role: UserRole.USER,
		});

		context.user109 = em.create(User, {
			username: "Matthew Ward",
			email: "mwardq6gg@example.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Storm King's Thunder",
			seatsOpen: 4,
			inactive: false,
			role: UserRole.USER,
		});

		context.user110 = em.create(User, {
			username: "Isabella Green",
			email: "igreenf45qh@example.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Out of the Abyss",
			seatsOpen: 2,
			inactive: false,
			role: UserRole.USER,
		});

		context.user111 = em.create(User, {
			username: "Joseph Hall",
			email: "jhabbllqi@example.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "Hoard of the Dragon Queen",
			seatsOpen: 5,
			inactive: false,
			role: UserRole.USER,
		});

		context.user112 = em.create(User, {
			username: "Mia Young",
			email: "mynmoungqj@example.com",
			city: "Little Rock",
			state: "AR",
			password: "sZ8PmRgF2",
			roleInGame: "Dungeon Master",
			campaign: "The Rise of Tiamat",
			seatsOpen: 6,
			inactive: false,
			role: UserRole.USER,
		});
	}
}
