import { TranslocoHandlerEventsService } from './../../data/services/transloco-handler-events.service';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BurgerButtonComponent } from '../burger-button/burger-button.component';
import { CommonModule } from '@angular/common';
import { translate } from '@ngneat/transloco'


@Component({
  selector: 'app-header',
  standalone: true,
  imports:[CommonModule, RouterLink, RouterLinkActive, BurgerButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translocoHandlerEvent: TranslocoHandlerEventsService) { }

  destroyRef = inject(DestroyRef);
  ngOnInit() {
    const subscription$ = this.translocoHandlerEvent.translationLoadSucces().subscribe(() => {
      this.navInfo.forEach(item => item.title = translate(`header.${item.title}`))   
    })
    this.destroyRef.onDestroy(() => {
      subscription$.unsubscribe()
    }) 
  }
  

  isActive = false
  navInfo = [
    {
      title: 'about',
      link: 'about'
    },
    {
      title: 'project',
      link: 'projects'
    },
    {
      title: 'experience',
      link: 'experience'
    },
    {
      title: 'contact',
      link: 'contact'
    }
  ]

  onClicked = () => {
    this.isActive = !this.isActive 
  }
}
