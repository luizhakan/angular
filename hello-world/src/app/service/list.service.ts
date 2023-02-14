import { Injectable } from '@angular/core';
import { Animal } from '../components/Animal';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  remove(animals: Animal[], animal: Animal): void {
    console.log(animals);
    animals.splice(animals.indexOf(animal), 1);
  }
}
