import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BurgerButtonComponent } from '../burger-button/burger-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports:[RouterLink, RouterLinkActive, BurgerButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navInfo = [
    {
      title: 'About',
      link: 'about'
    },
    {
      title: 'Projects',
      link: 'projects'
    },
    {
      title: 'Experiencie',
      link: 'experiencie'
    },
    {
      title: 'Contact',
      link: 'contact'
    }
  ]
}
