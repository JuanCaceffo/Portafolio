import { SkillsService } from './../../data/services/skills.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslocoDirective } from '@ngneat/transloco';
import { SkilllsDTO } from '../../data/interfaces/SkillsDTO';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslocoDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.sliceSkillList()
  }
  skillLists: Array<SkilllsDTO[]> = []

  sliceSkillList() {
    const firstColumnSize = 5
    this.skillsService.getAll().then(value => {
      const numList = Array.from({ length: (value.length-1) - 0 + 1 }, (_, index) => 0 + index)
      
      numList.forEach(num => {
        console.log(num)
        const actualColumnSize = firstColumnSize+num
        if (actualColumnSize - value.length > 0){
          this.skillLists.push(value.splice(0,actualColumnSize))
        }else{
          this.skillLists.push(value)
          return
        }
      })
    })
  }
  
}
