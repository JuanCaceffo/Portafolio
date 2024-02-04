import { SkillsService } from './../../data/services/skills.service'
import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { TranslocoDirective } from '@ngneat/transloco'
import { SkilllsDTO } from '../../data/interfaces/SkillsDTO'
import { skillsList } from '../../data/mocks/skills-mock'
import { from } from 'rxjs'

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslocoDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.sliceSkillList()
  }
  skillLists: Array<SkilllsDTO[]> = []

  sliceSkillList() {
    const firstColumnSize = 4
    var num = 0
    this.skillsService.getAll().then((value) => {
      const copyValue = Array.from(value)
      while ((copyValue.length - (firstColumnSize + num)) > 0) {
        this.skillLists.push(copyValue.splice(0, firstColumnSize + num))
        num++
      }
      this.skillLists.push(copyValue)
    })
    console.log(skillsList)
  }
}
