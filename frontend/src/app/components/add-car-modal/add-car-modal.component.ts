import { Component, EventEmitter, Output } from '@angular/core';
import { CarDTO } from '../../models/dtos/CarDTO';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-add-car-modal',
  standalone: true,
  imports: [],
  templateUrl: './add-car-modal.component.html',
  styleUrl: './add-car-modal.component.css',
})
export class AddCarModalComponent {
  car: CarDTO = new CarDTO();

  @Output() close = new EventEmitter<void>();

  constructor(private carService: CarService) {}

  onSubmit() {
    this.carService.addCar(this.car).subscribe(() => {
      this.closeModal();
    });
  }

  closeModal() {
    this.close.emit();
  }
}
