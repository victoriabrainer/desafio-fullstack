import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { CarBrand } from '../enums/brand.enum';
import { Stores } from '../enums/stores.enum';

export class CreateCarDto {
  @IsEnum(CarBrand)
  brand: CarBrand;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  year: string;

  @IsString()
  @IsNotEmpty()
  version: string;

  @IsString()
  @IsNotEmpty()
  km: string;

  @IsEnum(Stores)
  store: Stores;

  @IsString()
  @IsNotEmpty()
  price: string;
}
