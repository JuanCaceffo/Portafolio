import { SharedDataService } from './../../data/services/shared-data.service';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class ProjectsComponent implements OnInit, OnDestroy {

  constructor(private dataService: SharedDataService, private projectService: ProjectService) { }
  
  ngOnInit() {
    this.dataService.setData(this.fetchProjectData)
    this.fetchProjectData()
  }
  ngOnDestroy() {
    this.dataService.setData(() => {})
  }
  projectCards: CardProjectDTO[] = []

  fetchProjectData = () => {
    this.projectService.getAll().then((value) => {
      this.projectCards = value
    })
  }
}
