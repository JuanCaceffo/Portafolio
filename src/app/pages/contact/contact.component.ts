import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoDirective } from '@ngneat/transloco';
import { ContactDTO } from '../../data/interfaces/ContactDTO';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslocoDirective,FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data: ContactDTO = {} as ContactDTO

  inputPros = [
    {
      key: 'name' as keyof ContactDTO,
      type: 'text',
    },
    {
      key: 'email' as keyof ContactDTO,
      type: 'email',
    }
  ]

  caca(){
    console.log(this.data)
  }

}