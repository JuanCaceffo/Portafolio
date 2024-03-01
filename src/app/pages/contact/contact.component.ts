import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  inputPros = [
    {
      type: 'text',
      pleaceholderKey: "name"
    },
    {
      type: 'email',
      pleaceholderKey: "email"
    }
  ]
}
