import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

//import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private http: HttpClient) { }

  getMenuItems() {
    return this.http.get<any>('assets/data/menu-items.json')
    .toPromise()
    .then(res => <MenuItem[]>res.data)
    .then(data => { return data; });
  }
}
