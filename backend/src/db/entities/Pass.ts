import { Entity, ManyToOne, Property } from "@mikro-orm/core";
import type { Ref } from "@mikro-orm/core";
import { DungeonCompositeEntity } from "./DungeonBaseEntity.js";
import { User } from "./User.js";

/**
 * Pass acts the same as in Doggr
 */
@Entity()
export class Pass extends DungeonCompositeEntity {
	@ManyToOne({ primary: true })
	owner!: Ref<User>;

	@ManyToOne({ primary: true })
	passee!: Ref<User>;
}
