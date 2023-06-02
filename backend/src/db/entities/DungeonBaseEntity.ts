import { BaseEntity, PrimaryKey, Property } from "@mikro-orm/core";
import { SoftDeletable } from "mikro-orm-soft-delete";

@SoftDeletable(() => DungeonBaseEntity, "deleted_at", () => new Date())
//https://mikro-orm.io/docs/defining-entities/#using-mikroorms-baseentity-previously-wrappedentity
export class DungeonBaseEntity extends BaseEntity<DungeonBaseEntity, "id"> {
  @PrimaryKey()
	id!: number;
	
	@Property()
	created_at = new Date();
	
	@Property({onUpdate: () => new Date()})
	updated_at = new Date();

	@Property({ nullable: true })
	deleted_at?: Date;
}

@SoftDeletable(() => DungeonCompositeEntity, "deleted_at", () => new Date())
export class DungeonCompositeEntity {
	@Property()
	created_at = new Date();

	@Property({onUpdate: () => new Date()})
	updated_at = new Date();

	@Property({ nullable: true })
	deleted_at?: Date;
}



/*

	@Property


*/
