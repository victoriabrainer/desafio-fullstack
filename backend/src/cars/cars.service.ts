import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarsRepository } from './cars.repository';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Car } from './entities/car.entity';
import { CarBrand } from './enums/brand.enum';
import { Stores } from './enums/stores.enum';
import { brandToStores } from './mapping/brand-to-stores';

@Injectable()
export class CarsService {
  private carsRepository = CarsRepository(this.dataSource);

  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  private validateBrandStoreRelation(brand: CarBrand, store: Stores) {
    const validStores = brandToStores[brand];
    if (!validStores || !validStores.includes(store)) {
      throw new BadRequestException(
        `A loja ${store} não pertence a marca ${brand}`,
      );
    }
  }

  async create(createCarDto: CreateCarDto): Promise<Car> {
    this.validateBrandStoreRelation(createCarDto.brand, createCarDto.store);
    const car = this.carsRepository.create(createCarDto);
    return this.carsRepository.save(car);
  }

  async findAll(): Promise<Car[]> {
    return this.carsRepository.find();
  }

  async findOne(id: number): Promise<Car> {
    const car = await this.carsRepository.findOneBy({ id });
    if (!car) {
      throw new NotFoundException('Carro com ID ${id} não encontrado');
    }
    return car;
  }

  findByBrand(brand: CarBrand): Promise<Car[]> {
    return this.carsRepository.findByBrand(brand);
  }

  findByStore(store: Stores): Promise<Car[]> {
    return this.carsRepository.findByStore(store);
  }

  async update(id: number, updateCarDto: UpdateCarDto): Promise<Car> {
    await this.findOne(id);
    if (updateCarDto.brand && updateCarDto.store) {
      this.validateBrandStoreRelation(updateCarDto.brand, updateCarDto.store);
    }
    await this.carsRepository.update(id, updateCarDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const car = await this.findOne(id);
    await this.carsRepository.delete(car.id);
  }
}
