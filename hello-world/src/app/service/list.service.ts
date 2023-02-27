import { Injectable } from '@angular/core';
import { Animal } from '../components/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private http: HttpClient) {}

  remove(animals: Animal[], animal: Animal): void {
    console.log(animals);
    animals.splice(animals.indexOf(animal), 1);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
