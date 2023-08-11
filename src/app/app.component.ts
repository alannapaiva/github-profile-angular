import { Component } from '@angular/core';
import { iUser } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-profile-angular';
   user: iUser = {} as iUser;

  getUser(user: iUser) {
    this.user = user;
  }
}
