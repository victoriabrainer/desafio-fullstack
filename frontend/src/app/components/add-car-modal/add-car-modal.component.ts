import { Component, EventEmitter, Output } from '@angular/core';
import { CarDTO } from '../../models/dtos/CarDTO';
import { CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-car-modal',
  standalone: true,
  imports: [CommonModule],
  providers: [CarService],
  templateUrl: './add-car-modal.component.html',
  styleUrl: './add-car-modal.component.css',
})
export class AddCarModalComponent {
  car: CarDTO = new CarDTO();

  carBrands: string[] = ['BYD', 'Hyundai', 'Toyota', 'Volkswagen'];
  carStores: { [brand: string]: string[] } = {
    BYD: ['BYD Recife', 'BYD Salvador'],
    Toyota: ['Toyolex Imbiribeira', 'Toyolex Natal'],
    Hyundai: ['Pateo Afogados', 'Pateo São Luís'],
    Volkswagen: ['Bremen Recife', 'Bremen João Pessoa'],
  };

  allStores = [
    'BYD Recife',
    'BYD Salvador',
    'Toyolex Imbiribeira',
    'Toyolex Natal',
    'Pateo Afogados',
    'Pateo São Luís',
    'Bremen Recife',
    'Bremen João Pessoa',
  ];
  selectedBrand: string = '';
  filteredStores: string[] = [];

  @Output() close = new EventEmitter<void>();

  constructor(private carService: CarService) {}

  onSubmit() {
    this.carService.addCar(this.car).subscribe(() => {
      this.closeModal();
    });
  }

  onBrandChange(event: any): void {
    this.selectedBrand = event.target.value;
    this.filteredStores = this.selectedBrand
      ? this.carStores[this.selectedBrand]
      : [];
    this.car.store = '';
  }

  closeModal() {
    this.close.emit();
  }
}
