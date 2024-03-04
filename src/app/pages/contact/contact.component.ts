import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoDirective } from '@ngneat/transloco';
import { ContactDTO } from '../../data/interfaces/ContactDTO';
import { PersonalInfoService } from '../../data/services/PersonalInfo.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslocoDirective,FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {

  constructor(private infoService: PersonalInfoService) { }
  emptyContactData = {name: '', email:'',message:''}
  data: ContactDTO = Object.assign({}, this.emptyContactData)

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

  isNotComplete = () => (Object.values(this.data).some(value => !value))

  sendMessage(){
    this.infoService.contact(this.data)
    this.data = Object.assign({}, this.emptyContactData)
  }
}