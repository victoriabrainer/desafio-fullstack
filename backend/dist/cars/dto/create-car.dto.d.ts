import { CarBrand } from '../enums/brand.enum';
import { Stores } from '../enums/stores.enum';
export declare class CreateCarDto {
    brand: CarBrand;
    model: string;
    year: string;
    version: string;
    km: string;
    store: Stores;
    price: string;
}
