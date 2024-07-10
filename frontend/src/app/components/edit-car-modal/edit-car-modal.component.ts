import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarDTO } from '../../models/dtos/CarDTO';
import { CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-car-modal',
  standalone: true,
  imports: [CommonModule],
  providers: [CarService],
  templateUrl: './edit-car-modal.component.html',
  styleUrl: './edit-car-modal.component.css',
})
export class EditCarModalComponent {
  @Input() car!: CarDTO;
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

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

  constructor(private carService: CarService) {}

  onSubmit() {
    this.carService.updateCar(this.car.id, this.car).subscribe(() => {
      this.closeModal();
    });
  }

  closeModal() {
    this.close.emit();
  }

  onBrandChange(event: any): void {
    this.selectedBrand = event.target.value;
    this.filteredStores = this.selectedBrand
      ? this.carStores[this.selectedBrand]
      : [];
    this.car.store = '';
  }
}
