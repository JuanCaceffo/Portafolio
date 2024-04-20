import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { SkilllsDTO } from '../interfaces/SkillsDTO'
import { skillsList } from '../mocks/data/skills-mock'
import { pathApi, paths } from './config'
import { lastValueFrom } from 'rxjs'
import { ContactDTO } from '../interfaces/ContactDTO'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class PersonalInfoService {
  constructor(private http: HttpClient) {}
  baseUrl = environment.baseUrl

  getSkills(): Promise<SkilllsDTO[]> {
    const data$ = this.http.get<SkilllsDTO[]>(`${this.baseUrl}/${paths.info}/skills`)
    return lastValueFrom(data$)
  }

  contact(data: ContactDTO): Promise<Object> {
    return lastValueFrom(this.http.post(`${this.baseUrl}/${paths.info}/contact`,data))
  }
}
