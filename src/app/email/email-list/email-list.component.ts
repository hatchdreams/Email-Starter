import { Component, OnInit } from '@angular/core';
import { InboundEmail } from '../../_models/inboundemail';
import { InboundEmailService } from '../../_services/inbound-email.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {

  inboundEmails: InboundEmail[];
  selectedEmail: InboundEmail;

  constructor(public inboundEmailService: InboundEmailService) { }

  ngOnInit(): void {
    this.inboundEmailService.getInboundEmails().then(data => {
      this.inboundEmails = data
      console.log(this.inboundEmails);
    });
    
  }

  onRowSelect(event) {
    //this.messageService.add({severity:'info', summary:'Product Selected', detail: event.data.name});
  }

}
