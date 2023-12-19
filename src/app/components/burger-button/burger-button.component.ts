import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Input() isActive = false
  @Input() onClicked!: () => void;
}
