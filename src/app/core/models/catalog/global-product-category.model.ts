import { Document } from "../core-models/document.model";
import { EntityStatus } from "../core-models/entity-status.model";

export interface GlobalProductCategory {
    id: number;
    globalCode: string;
    name: string;
    displayName: string;
    slug: string;
    description: string;
    shortDescription: string;
    isRoot: boolean;
    isLeaf: boolean;
    parentId: number | null;
    parent: GlobalProductCategory;
    childrenCount: number;
    productsCount: number;
    displayOrder: number;
    baseImageId: number | null;
    baseImage: Document;
    thumbnailImageId: number | null;
    thumbnailImage: Document;
    entityStatusId: number;
    entityStatus: EntityStatus;
    isDeleted: boolean;
    createdAt: string | null;
    createdBy: number | null;
    updatedAt: string | null;
    updatedBy: number | null;
    children: GlobalProductCategory[];
    // products: Product[];
}