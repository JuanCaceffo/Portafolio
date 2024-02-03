import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslocoDirective } from '@ngneat/transloco';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslocoDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
