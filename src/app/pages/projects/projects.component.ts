import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PorjectCardComponent } from '../../components/porject-card/porject-card.component';

@Component({
  standalone: true,
  imports: [CommonModule, PorjectCardComponent],
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
