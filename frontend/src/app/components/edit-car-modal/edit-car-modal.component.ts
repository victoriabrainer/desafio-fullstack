import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarDTO } from '../../models/dtos/CarDTO';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-edit-car-modal',
  standalone: true,
  imports: [],
  templateUrl: './edit-car-modal.component.html',
  styleUrl: './edit-car-modal.component.css',
})
export class EditCarModalComponent {
  @Input() car!: CarDTO;
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  constructor(private carService: CarService) {}

  onSubmit() {
    this.carService.updateCar(this.car.id, this.car).subscribe(() => {
      this.closeModal();
    });
  }

  closeModal() {
    this.close.emit();
  }

  confirmDelete() {
    this.carService.deleteCar(this.car.id).subscribe(() => {
      this.confirm.emit();
      this.closeModal();
    });
  }
}
