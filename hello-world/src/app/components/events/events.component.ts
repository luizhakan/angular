import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  show: boolean = true;

  showMessage(): void {
    this.show = !this.show; // toggle the boolean value
  }
}
