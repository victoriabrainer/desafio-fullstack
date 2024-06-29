import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDTO } from '../models/dtos/CarDTO';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = 'https://localhost:3000/cars';

  constructor(private http: HttpClient) {}

  getCars(): Observable<CarDTO[]> {
    return this.http.get<CarDTO[]>(this.apiUrl);
  }

  addCar(car: CarDTO): Observable<CarDTO> {
    return this.http.post<CarDTO>(this.apiUrl, car);
  }

  updateCar(id: number, car: CarDTO): Observable<CarDTO> {
    return this.http.put<CarDTO>(`${this.apiUrl}/${id}`, car);
  }

  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
