import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardsComponent } from '../cards/cards.component';
import { CarService } from '../../services/car.service';
import { CarDTO } from '../../models/dtos/CarDTO';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [SidebarComponent, CardsComponent],
})
export class HomeComponent {
  cars: CarDTO[] = [];
  constructor(private carService: CarService) {}
  ngOnInit() {
    this.loadCars();
  }
  loadCars() {
    this.carService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }
  openAddCarModal() {
    this.loadCars();
  }
  openEditCarModal(car: CarDTO) {
    this.loadCars();
  }
  openDeleteCarModal(car: CarDTO) {
    this.loadCars();
  }
}
