import { Province } from "./province.model";
import { Commune } from "./commune.model";

export interface District {
    id: number;
    globalCode: string;
    name: string;
    displayName: string;
    slug: string;
    provinceId: number;
    province: Province;
    communes: Commune[];
}