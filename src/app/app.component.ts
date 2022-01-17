import { Component } from '@angular/core';
import { User } from './_models/user';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeng-sandbox';
  users: any;
  accessMode = false;
  activeTab: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.setCurrentUser();
    this.accessToggle();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.userService.setCurrentUser(user);
  }

  accessToggle() {
    this.accessMode = !this.accessMode
  }

}
