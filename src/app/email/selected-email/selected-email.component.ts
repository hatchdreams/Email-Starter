import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selected-email',
  templateUrl: './selected-email.component.html',
  styleUrls: ['./selected-email.component.css']
})
export class SelectedEmailComponent implements OnInit {
  @Input() selectedEmailFromHome: any;

  constructor() { }

  ngOnInit(): void {
  }

}
