import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  @Output() active = new EventEmitter<boolean>()
  isActive = false

  onClicked() {
    this.isActive = !this.isActive 
    this.active.emit(this.isActive)
  }
}
