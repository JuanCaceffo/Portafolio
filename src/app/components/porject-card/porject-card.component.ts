import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-porject-card',
  templateUrl: './porject-card.component.html',
  styleUrls: ['./porject-card.component.scss'],
})
export class PorjectCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
