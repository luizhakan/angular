import { Injectable } from '@angular/core';
import { Animal } from '../components/Animal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private http: HttpClient) {}

  remove(animal: Animal): void {
    this.http.delete(`${this.apiUrl}/${animal.id}`).subscribe();
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
