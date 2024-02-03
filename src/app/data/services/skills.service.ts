import { Injectable } from '@angular/core'
import { SkilllsDTO } from '../interfaces/SkillsDTO';
import { skillsList } from '../mocks/skills-mock';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor() {}

  getAll(): Promise<SkilllsDTO[]>{
    return new Promise((resolve) => {
      resolve(skillsList)
    })
  }
}
