"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandToStores = void 0;
const brand_enum_1 = require("../enums/brand.enum");
const stores_enum_1 = require("../enums/stores.enum");
exports.brandToStores = {
    [brand_enum_1.CarBrand.BYD]: [stores_enum_1.Stores.BYD_Recife, stores_enum_1.Stores.BYD_Salvador],
    [brand_enum_1.CarBrand.HYUNDAI]: [stores_enum_1.Stores.Hyundai_Afogados, stores_enum_1.Stores.Hyundai_Sao_Luis],
    [brand_enum_1.CarBrand.TOYOTA]: [stores_enum_1.Stores.Toyota_Imbiribeira, stores_enum_1.Stores.Toyota_Natal],
    [brand_enum_1.CarBrand.VOLKSWAGEN]: [
        stores_enum_1.Stores.Volkswagen_Joao_Pessoa,
        stores_enum_1.Stores.Volkswagen_Recife,
    ],
};
//# sourceMappingURL=brand-to-stores.js.map