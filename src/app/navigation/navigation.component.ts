import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NavigationService } from '../_services/navigation.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  items!: MenuItem[];
  model: any = {};

  constructor(
    private navigationService: NavigationService,
    public userService: UserService
    ) { }
  
  ngOnInit(): void {
    this.navigationService.getMenuItems().then(items => this.items = items);
  }

  login() {
    this.userService.login(this.model).subscribe(response => {
      console.log(response);
    }), error => {
      console.log(error);
    }
  }

  logout() {
    this.userService.logout();
  }

}
