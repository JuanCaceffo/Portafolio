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

  onClicked = () => {
    this.isActive = !this.isActive 
  }
}
