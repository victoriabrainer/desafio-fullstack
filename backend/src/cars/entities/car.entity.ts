import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Stores } from '../enums/stores.enum';
import { CarBrand } from '../enums/brand.enum';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: CarBrand })
  brand: CarBrand;

  @Column()
  model: string;

  @Column()
  year: string;

  @Column()
  version: string;

  @Column()
  km: string;

  @Column({ type: 'enum', enum: Stores })
  store: Stores;

  @Column()
  price: string;
}
