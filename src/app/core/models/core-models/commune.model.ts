import { District } from "./district.model";

export interface Commune {
    id: number;
    globalCode: string;
    name: string;
    displayName: string;
    slug: string;
    districtId: number;
    district: District;
}