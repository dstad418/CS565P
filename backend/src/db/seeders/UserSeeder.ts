import type { Dictionary, EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import { User, UserRole } from "../entities/User.js";

export class UserSeeder extends Seeder {
	async run(em: EntityManager, context: Dictionary): Promise<void> {
		// https://mikro-orm.io/docs/seeding#shared-context
		context.user1 = em.create(User, {
			name: "Spot",
			email: "email@email.com",
			password: "password",
			petType: "Dog",
			role: UserRole.ADMIN,
		});
		
		context.user2 = em.create(User, {
			name: "Dogbert",
			email: "email2@email.com",
			password: "password",
			petType: "Dog",
			role: UserRole.USER,
		});
		
		context.user3 = em.create(User, {
			name: "Doglord",
			email: "email3@email.com",
			password: "password",
			petType: "Dog",
			role: UserRole.USER,
		});
		
		context.user4 = em.create(User, {
			name: "NotaDog",
			email: "email4@email.com",
			password: "password",
			petType: "Cat",
			role: UserRole.USER,
		});
	}
}

/*

	type role = "Player" | "Dungeon Master";
	type campaign = "" |

		context.user1 = em.create(User, {
			name: "Dennis Burkham",
			email: "email1@email.com",
			city: "1",
			state: "WA",
			password: "password",
			role: "player",
			ONLY IF DM:
				campaign: "Dungeon of the Mad Mage",
				playerCount: "",
			role: UserRole.USER,
		)};

*/
