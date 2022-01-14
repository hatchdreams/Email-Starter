import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-main',
  templateUrl: './email-main.component.html',
  styleUrls: ['./email-main.component.css']
})
export class EmailMainComponent implements OnInit {
  accessMode = false;
  sendEmailMode = false;
  inboundEmails: any;
  selectedEmail: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getInboundEmails();
  }

  accessToggle() {
    this.accessMode = !this.accessMode
  }

  getInboundEmails() {
    //this.http.get('https://localhost:5001/api/inboundemails').subscribe(inboundEmails => this.inboundEmails = inboundEmails);
  }

  cancelSendEmail(event: boolean) {
    this.sendEmailMode = event;
  }

}
