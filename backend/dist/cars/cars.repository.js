"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsRepository = void 0;
const car_entity_1 = require("./entities/car.entity");
const CarsRepository = (dataSource) => dataSource.getRepository(car_entity_1.Car).extend({
    async findByBrand(brand) {
        return this.find({ where: { brand } });
    },
    async findByStore(store) {
        return this.find({ where: { store } });
    },
});
exports.CarsRepository = CarsRepository;
//# sourceMappingURL=cars.repository.js.map