import { Document } from "./document.model";

export interface DocumentType {
    id: number;
    globalCode: string;
    name: string;
    displayName: string;
    slug: string;
    extension: string;
    mimeType: string;
    documents: Document[];
}