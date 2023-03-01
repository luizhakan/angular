import { Component } from '@angular/core';
import { Animal } from '../Animal';
import { ListService } from 'src/app/service/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [];

  animalDetails = '';

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  showAge(animal: Animal): string {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
    return this.animalDetails;
  }

  removeAnimal(animal: Animal) {
    // this.listService.remove(this.animals, animal);
    // this.animals = this.animals.splice(animal.indexOf(animal), 1);
    // remover animal do banco de dados
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => {
      this.animals = animals;
    });
  }
}
