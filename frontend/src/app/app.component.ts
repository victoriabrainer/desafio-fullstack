import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddCarModalComponent } from './components/add-car-modal/add-car-modal.component';
import { EditCarModalComponent } from './components/edit-car-modal/edit-car-modal.component';
import { DeleteCarModalComponent } from './components/delete-car-modal/delete-car-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    CardsComponent,
    SidebarComponent,
    AddCarModalComponent,
    EditCarModalComponent,
    DeleteCarModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Parvi';
}
