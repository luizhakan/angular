import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: { name: string; type: string }[] = [
    { name: 'Lyon', type: 'Lion' },
    { name: 'Cheetos', type: 'Tiger' },
    { name: 'Dumble', type: 'Elephant' },
    { name: 'Random', type: 'Giraffe' },
  ];
}
