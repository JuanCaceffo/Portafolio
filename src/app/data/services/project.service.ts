import { Injectable } from '@angular/core';
import { CardProjectDTO } from '../interfaces/CardProjectDTO';
import { projectCardData } from '../mocks/card-project-mock';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
constructor() { }

  getAll(): Promise<CardProjectDTO[]> {
    return new Promise((resolve) => {
      resolve(projectCardData)
    })
  }
}
