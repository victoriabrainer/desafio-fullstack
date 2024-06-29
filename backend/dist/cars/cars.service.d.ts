import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { DataSource } from 'typeorm';
import { Car } from './entities/car.entity';
import { CarBrand } from './enums/brand.enum';
import { Stores } from './enums/stores.enum';
export declare class CarsService {
    private readonly dataSource;
    private carsRepository;
    constructor(dataSource: DataSource);
    private validateBrandStoreRelation;
    create(createCarDto: CreateCarDto): Promise<Car>;
    findAll(): Promise<Car[]>;
    findOne(id: number): Promise<Car>;
    findByBrand(brand: CarBrand): Promise<Car[]>;
    findByStore(store: Stores): Promise<Car[]>;
    update(id: number, updateCarDto: UpdateCarDto): Promise<Car>;
    remove(id: number): Promise<void>;
}
