import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-button.component.html',
  styleUrls: ['./burger-button.component.scss'],
})
export class BurgerButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  isActive = false

  changeStateButton() {
    this.isActive = !this.isActive 
  }

}
