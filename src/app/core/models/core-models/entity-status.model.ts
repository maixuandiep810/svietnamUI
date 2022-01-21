import { EntityType } from "./entity-type.model";

export interface EntityStatus {
    id: number;
    globalCode: string;
    name: string;
    displayName: string;
    slug: string;
    entityTypeId: number;
    entityType: EntityType;
}