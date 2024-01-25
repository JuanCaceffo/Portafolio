import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BurgerButtonComponent } from '../burger-button/burger-button.component';
import { CommonModule } from '@angular/common';
import { TranslocoDirective, TranslocoService, translate } from '@ngneat/transloco'


@Component({
  selector: 'app-header',
  standalone: true,
  imports:[CommonModule, RouterLink, RouterLinkActive, BurgerButtonComponent, TranslocoDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translocoService: TranslocoService) { }

  ngOnInit() {
  }
  

  isActive = false
  navInfo = [
    {
      langKey: 'about',
      link: 'about'
    },
    {
      langKey: 'project',
      link: 'projects'
    },
    {
      langKey: 'experience',
      link: 'experience'
    },
    {
      langKey: 'contact',
      link: 'contact'
    }
  ]

  onClicked = () => {
    this.isActive = !this.isActive 
  }
  changeLanguague = (lang: 'es'|'en') => {
    this.translocoService.setActiveLang(lang)
  }
}
