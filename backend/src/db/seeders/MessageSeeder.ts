import type { Dictionary, EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import { Message } from "../entities/Message.js";
import { User } from "../entities/User.js";

/**
 * MessageSeeder.ts, will autofill in several messages. Some messages are weird, but that's for the purposes
 * of the presentation that i'll film.
 */
export class MessageSeeder extends Seeder {
	async run(em: EntityManager, context: Dictionary): Promise<void> {
		const msgRepo = em.getRepository(Message);

		// https://mikro-orm.io/docs/seeding#shared-context

		msgRepo.create({
			sender: context.user1,
			receiver: context.user2,
			message: "Test message 1",
		});
		msgRepo.create({
			sender: context.user2,
			receiver: context.user1,
			message: "Test message 2",
		});
		msgRepo.create({
			sender: context.user3,
			receiver: context.user2,
			message: "Test message 3",
		});
		msgRepo.create({
			sender: context.user1,
			receiver: context.user3,
			message: "Test message 4",
		});
		msgRepo.create({
			sender: context.user2,
			receiver: context.user3,
			message: "Test message 5",
		});
		msgRepo.create({
			sender: context.user3,
			receiver: context.user1,
			message: "Test message 6",
		});
		msgRepo.create({
			sender: context.user19,
			receiver: context.user99,
			message: "Please let me join your game!",
		});
		msgRepo.create({
			sender: context.user82,
			receiver: context.user99,
			message: "GIVE ME YOUR TEETH!",
		});
		msgRepo.create({
			sender: context.user61,
			receiver: context.user99,
			message: "Please let me join your game!",
		});
	}
}
