import { DataSource } from 'typeorm';
import { Car } from './entities/car.entity';
import { CarBrand } from './enums/brand.enum';
import { Stores } from './enums/stores.enum';
export declare const CarsRepository: (dataSource: DataSource) => import("typeorm").Repository<Car> & {
    findByBrand(brand: CarBrand): Promise<Car[]>;
    findByStore(store: Stores): Promise<Car[]>;
};
