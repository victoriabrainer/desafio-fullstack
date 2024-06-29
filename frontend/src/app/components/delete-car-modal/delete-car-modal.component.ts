import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarDTO } from '../../models/dtos/CarDTO';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-delete-car-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-car-modal.component.html',
  styleUrl: './delete-car-modal.component.css',
})
export class DeleteCarModalComponent {
  @Input() car!: CarDTO;
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  constructor(private carService: CarService) {}

  confirmDelete() {
    this.carService.deleteCar(this.car.id).subscribe(() => {
      this.confirm.emit();
      this.closeModal();
    });
  }

  closeModal() {
    this.close.emit();
  }
}
