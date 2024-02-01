import { emptyPrjtCardData } from './../../data/mocks/card-project-mock';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProjectCardComponent } from './project-card.component'
import { CommonModule } from '@angular/common'
import { TranslocoDirective } from '@ngneat/transloco'
import { TestingHelper } from '../../utils/TestingHelper'
import { getTranslocoModule } from '../../utils/TestConfiguration';

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent
  let fixture: ComponentFixture<ProjectCardComponent>
  let testingHelper: TestingHelper<ProjectCardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, TranslocoDirective, getTranslocoModule()],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardComponent)
    component = fixture.componentInstance
    component.cardData = emptyPrjtCardData
    testingHelper = TestingHelper.createHelper(fixture)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('A project card component without repo and deploy data do not show these elements', () => {
    expect(testingHelper.getByTestId('pjt-link-repo')).toBeFalsy()
    expect(testingHelper.getByTestId('pjt-link-deploy')).toBeFalsy()
  })

  it('When the project card contains repo and deploy data, these elements will be shown in the window.', () => {
    component.cardData = {
      pjtType: { es: '', en: '' },
      title: { es: '', en: '' },
      content: {
        description: {
          es: '',
          en: '',
        },
        deploy: 'contenido',
        repo: 'contenido',
      },
      img: '',
    }
    fixture.detectChanges()
    expect(testingHelper.getByTestId('pjt-link-repo')).toBeTruthy()
    expect(testingHelper.getByTestId('pjt-link-deploy')).toBeTruthy()
  })
})
