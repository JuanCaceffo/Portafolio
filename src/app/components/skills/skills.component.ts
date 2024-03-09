import { PersonalInfoService } from '../../data/services/PersonalInfo.service'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { TranslocoDirective } from '@ngneat/transloco'
import { SkilllsDTO } from '../../data/interfaces/SkillsDTO'
import { skillsList } from '../../data/mocks/data/skills-mock'
import { from } from 'rxjs'

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslocoDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor(private skillsService: PersonalInfoService) {}

  ngOnInit() {
    this.skillsService.getSkills().then(value => {
      this.skillList = value
    })
  }
  skillList: SkilllsDTO[] = []
}
