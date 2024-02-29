import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private data = new BehaviorSubject((() => {}))
  currentData = this.data.asObservable()

  setData(data: () => void){
    this.data.next(data)
  }
}
