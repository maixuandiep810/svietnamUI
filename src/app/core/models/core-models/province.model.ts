import { Country } from "./country.model";
import { District } from "./district.model";

export interface Province {
    id: number;
    globalCode: string;
    name: string;
    displayName: string;
    slug: string;
    countryId: number;
    country: Country;
    districts: District[];
}