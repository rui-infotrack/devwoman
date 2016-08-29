
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
}
