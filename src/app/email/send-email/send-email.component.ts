import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  @Input() selectedEmailFromHome: any;
  @Output() cancelSend = new EventEmitter();
  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  sendEmail() {
    console.log(this.model)
  }

  cancel() {
    this.cancelSend.emit(false);
  }

}
