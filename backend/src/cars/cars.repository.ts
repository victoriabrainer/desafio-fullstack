import { DataSource } from 'typeorm';
import { Car } from './entities/car.entity';
import { CarBrand } from './enums/brand.enum';
import { Stores } from './enums/stores.enum';

// export class CarsRepository extends Repository<Car> {
//   async findByBrand(brand: CarBrand): Promise<Car[]> {
//     return this.find({ where: { brand } });
//   }

//   async findByStore(store: Stores): Promise<Car[]> {
//     return this.find({ where: { store } });
//   }
// }

export const CarsRepository = (dataSource: DataSource) =>
  dataSource.getRepository(Car).extend({
    async findByBrand(brand: CarBrand): Promise<Car[]> {
      return this.find({ where: { brand } });
    },

    async findByStore(store: Stores): Promise<Car[]> {
      return this.find({ where: { store } });
    },
  });
