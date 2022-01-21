import { DocumentType } from "./document-type.model";
import { EntityStatus } from "./entity-status.model";

export interface Document {
    id: number;
    globalCode: string;
    name: string;
    displayName: string;
    slug: string;
    title: string;
    location: string;
    url: string;
    desciption: string;
    documentTypeId: number;
    documentType: DocumentType;
    entityStatusId: number;
    entityStatus: EntityStatus;
    isDeleted: boolean;
    createdAt: string | null;
    createdBy: number | null;
    updatedAt: string | null;
    updatedBy: number | null;
}