import { Component, OnInit } from '@angular/core';
import { TranslocoDirective } from '@ngneat/transloco';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports:[TranslocoDirective, SkillsComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
