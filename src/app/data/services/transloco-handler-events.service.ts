import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco'
import { filter } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TranslocoHandlerEventsService {

  constructor(private translocoService: TranslocoService) {}

  translationLoadSucces(){
    return this.translocoService.events$.pipe(filter(event => event.type === "translationLoadSuccess"))
  }
}
