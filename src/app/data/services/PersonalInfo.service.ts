import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { SkilllsDTO } from '../interfaces/SkillsDTO'
import { skillsList } from '../mocks/skills-mock'
import { pathApi, paths } from './config'
import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class PersonalInfoService {
  constructor(private http: HttpClient) {}

  getAll(): Promise<SkilllsDTO[]> {
    const data$ = this.http.get<SkilllsDTO[]>(`${pathApi}/${paths.info}/skills`)
    return lastValueFrom(data$)
  }
}
