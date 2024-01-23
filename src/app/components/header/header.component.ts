import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BurgerButtonComponent } from '../burger-button/burger-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports:[CommonModule, RouterLink, RouterLinkActive, BurgerButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isActive = false
  navInfo = [
    {
      title: $localize `:{about}:Sobre mi`,
      link: 'about'
    },
    {
      title: $localize `:{project}:Proyectos`,
      link: 'projects'
    },
    {
      title: $localize `:{experiencie}:Experiencia`,
      link: 'experiencie'
    },
    {
      title: $localize `:{contact}:Contacto`,
      link: 'contact'
    }
  ]

  onClicked = () => {
    this.isActive = !this.isActive 
  }
}
