import { SnackbarAlertService } from './../../data/services/snackbar-alert.service';
import { CommonModule } from '@angular/common'
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { TranslocoDirective, TranslocoService } from '@ngneat/transloco'
import { ContactDTO } from '../../data/interfaces/ContactDTO'
import { PersonalInfoService } from '../../data/services/PersonalInfo.service'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    TranslocoDirective,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnDestroy{
  constructor(
    private infoService: PersonalInfoService,
    private snackBar: SnackbarAlertService,
    private translocoService: TranslocoService
  ) {}

  ngOnDestroy() {
    this.snackRef && this.snackRef.dismiss()
  }

  emptyContactData = { name: '', email: '', message: '' }
  data: ContactDTO = Object.assign({}, this.emptyContactData)
  snackRef?: MatSnackBarRef<TextOnlySnackBar> 

  inputPros = [
    {
      key: 'name' as keyof ContactDTO,
      type: 'text',
    },
    {
      key: 'email' as keyof ContactDTO,
      type: 'email',
    },
  ]

  isNotComplete = () => Object.values(this.data).some((value) => !value)

  sendMessage() {
    this.infoService.contact(this.data).then((_value) => {
      this.snackBar.openSuccesSnack({message: this.translocoService.translate('contact.email-succes'), action: '', config: {  verticalPosition:'top'}})
    }
    ).catch((_err) => {
      this.snackRef= this.snackBar.openErrorSnack({message: this.translocoService.translate('contact.email-error'), action: '', config: {  verticalPosition:'top'}})
    })
    this.data = Object.assign({}, this.emptyContactData)
  }
}
