import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name: string = 'Luiz Hakan';
  age: number = 20;
  job: string = 'Developer';
  hobbies: string[] = ['Programar', ' Ver minha namorada'];
  car = {
    name: 'Fiat Toro',
    year: 2019,
  };
}
