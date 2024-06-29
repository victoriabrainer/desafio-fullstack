import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarDTO } from '../../models/dtos/CarDTO';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input() car!: CarDTO;
  @Output() edit = new EventEmitter<CarDTO>();
  @Output() delete = new EventEmitter<CarDTO>();

  editCar() {
    this.edit.emit(this.car);
  }

  deleteCar() {
    this.delete.emit(this.car);
  }
}
