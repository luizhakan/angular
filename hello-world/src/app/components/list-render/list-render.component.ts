import { Component } from '@angular/core';
import { Animal } from '../Animal';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Lyon', type: 'Lion', age: 5 },
    { name: 'Cheetos', type: 'Tiger', age: 3 },
    { name: 'Dumble', type: 'Elephant', age: 1 },
    { name: 'Random', type: 'Giraffe', age: 2 },
  ];

  animalDetails: string = '';

  showAge(animal: Animal): string {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
    return this.animalDetails;
  }
}
