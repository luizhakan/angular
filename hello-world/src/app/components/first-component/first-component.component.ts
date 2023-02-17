import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name = 'Luiz Hakan';
  age = 20;
  job = 'Developer';
  hobbies: string[] = ['Programar', ' Ver minha namorada'];
  car = {
    name: 'Fiat Toro',
    year: 2019,
  };
}
