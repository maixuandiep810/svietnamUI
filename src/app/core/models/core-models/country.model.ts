import { Province } from "./province.model";

export interface Country {
    id: number;
    globalCode: string;
    name: string;
    displayName: string;
    slug: string;
    provinces: Province[];
}