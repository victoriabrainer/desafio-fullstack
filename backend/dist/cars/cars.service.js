"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const cars_repository_1 = require("./cars.repository");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const brand_to_stores_1 = require("./mapping/brand-to-stores");
let CarsService = class CarsService {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.carsRepository = (0, cars_repository_1.CarsRepository)(this.dataSource);
    }
    validateBrandStoreRelation(brand, store) {
        if (!brand_to_stores_1.brandToStores[brand].includes(store)) {
            throw new common_1.BadRequestException(`A loja ${store} não pertence a marca ${brand}`);
        }
    }
    async create(createCarDto) {
        this.validateBrandStoreRelation(createCarDto.brand, createCarDto.store);
        const car = this.carsRepository.create(createCarDto);
        return this.carsRepository.save(car);
    }
    async findAll() {
        return this.carsRepository.find();
    }
    async findOne(id) {
        const car = await this.carsRepository.findOneBy({ id });
        if (!car) {
            throw new common_1.NotFoundException('Carro com ID ${id} não encontrado');
        }
        return car;
    }
    findByBrand(brand) {
        return this.carsRepository.findByBrand(brand);
    }
    findByStore(store) {
        return this.carsRepository.findByStore(store);
    }
    async update(id, updateCarDto) {
        await this.findOne(id);
        if (updateCarDto.brand && updateCarDto.store) {
            this.validateBrandStoreRelation(updateCarDto.brand, updateCarDto.store);
        }
        await this.carsRepository.update(id, updateCarDto);
        return this.findOne(id);
    }
    async remove(id) {
        const car = await this.findOne(id);
        await this.carsRepository.delete(car.id);
    }
};
exports.CarsService = CarsService;
exports.CarsService = CarsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], CarsService);
//# sourceMappingURL=cars.service.js.map