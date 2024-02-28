import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { ProjectService } from '../../data/services/project.service';
import { CardProjectDTO } from '../../data/interfaces/CardProjectDTO';

@Component({
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAll().then((value) => {
      console.log(value)
      this.projectCards = value
    })
  }
  projectCards: CardProjectDTO[] = []
}
