import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'luizhakan';
  userData = {
    email: 'luizhakan2@protonmail.com',
    role: 'Admin',
  };
  title = 'hello-world';
}
