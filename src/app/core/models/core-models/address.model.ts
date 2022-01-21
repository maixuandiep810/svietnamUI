import { Commune } from "./commune.model";
import { District } from "./district.model";
import { Province } from "./province.model";
import { Country } from "./country.model";

export interface Address {
    id: number;
    globalCode: string;
    name: string;
    displayName: string;
    slug: string;
    contactName: string;
    phoneNumber: string;
    addressLine1: string;
    addressLine2: string;
    zipCode: string;
    communeId: number | null;
    commune: Commune;
    districtId: number | null;
    district: District;
    provinceId: number | null;
    province: Province;
    countryId: number | null;
    country: Country;
}