import { Injectable } from '@angular/core';
import { CardProjectDTO } from '../interfaces/CardProjectDTO';
import {HttpClient} from '@angular/common/http'
import { pathApi, paths } from './config';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
constructor(private httpClient: HttpClient) { }

  async getAll(): Promise<CardProjectDTO[]> {
    const response$ = this.httpClient.get<CardProjectDTO[]>(`${pathApi}/${paths.project}/all`)
    return await lastValueFrom(response$)
  }
}
