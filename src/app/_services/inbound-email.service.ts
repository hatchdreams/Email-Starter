import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { InboundEmail } from '../_models/inboundemail';


@Injectable({
  providedIn: 'root'
})
export class InboundEmailService {
  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject;

  constructor(private http: HttpClient) {}

  getInboundEmails() {
    return this.http.get<any>('assets/data/inbound-emails.json')
    .toPromise()
    .then(res => <InboundEmail[]>res.data)
    .then(data => { return data; });
  }

  test(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model);
  }

  //Use pipe to map and then store user to local storage
  test2(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
  }
  
}
