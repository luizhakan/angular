import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  size: number = 40;
  font: string = 'Arial';
  color: string = 'red';

  classes : string[] = ['green-title', 'small-title'];
  underline: string = 'underline';
}
