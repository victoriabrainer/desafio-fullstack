import { Stores } from '../enums/stores.enum';
import { CarBrand } from '../enums/brand.enum';
export declare class Car {
    id: number;
    brand: CarBrand;
    model: string;
    year: string;
    version: string;
    km: string;
    store: Stores;
    price: string;
}
