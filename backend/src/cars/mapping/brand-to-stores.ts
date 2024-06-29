import { CarBrand } from '../enums/brand.enum';
import { Stores } from '../enums/stores.enum';

export const brandToStores: { [key in CarBrand]: Stores[] } = {
  [CarBrand.BYD]: [Stores.BYD_Recife, Stores.BYD_Salvador],
  [CarBrand.HYUNDAI]: [Stores.Hyundai_Afogados, Stores.Hyundai_Sao_Luis],
  [CarBrand.TOYOTA]: [Stores.Toyota_Imbiribeira, Stores.Toyota_Natal],
  [CarBrand.VOLKSWAGEN]: [
    Stores.Volkswagen_Joao_Pessoa,
    Stores.Volkswagen_Recife,
  ],
};
