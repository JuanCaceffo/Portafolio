/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProjectCardComponent } from './project-card.component'
import { CommonModule } from '@angular/common'
import { TranslocoDirective } from '@ngneat/transloco'
import { providers } from '../../app.config'
import { projectCardData } from '../../data/mocks/card-project-mock'
import { TestingHelper } from '../../utils/TestingHelper'

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent
  let fixture: ComponentFixture<ProjectCardComponent>
  let testingHelper: TestingHelper<ProjectCardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, TranslocoDirective, ProjectCardComponent],
      providers: [...providers],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardComponent)
    component = fixture.componentInstance
    testingHelper = TestingHelper.createHelper(fixture)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('A project card component without repo and deploy data do not show these elements', () => {
    component.cardData = projectCardData[0]
    fixture.detectChanges()
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
  })
})