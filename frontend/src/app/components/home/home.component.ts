import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardsComponent } from '../cards/cards.component';
import { CarService } from '../../services/car.service';
import { CarDTO } from '../../models/dtos/CarDTO';
import { AddCarModalComponent } from '../add-car-modal/add-car-modal.component';
import { EditCarModalComponent } from '../edit-car-modal/edit-car-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    SidebarComponent,
    CardsComponent,
    AddCarModalComponent,
    EditCarModalComponent,
  ],
  providers: [CarService],
})
export class HomeComponent implements OnInit {
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
}
