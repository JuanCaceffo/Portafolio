/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PorjectCardComponent } from './porject-card.component'
import { AppComponent } from '../../app.component'
import { CommonModule } from '@angular/common'
import { provideTransloco, TranslocoDirective } from '@ngneat/transloco'
import { isDevMode } from '@angular/core'
import { TranslocoHttpLoader } from '../../data/services/transloco-loader'
import { provideHttpClient } from '@angular/common/http'
import { providers } from '../../app.config'

describe('PorjectCardComponent', () => {
  let component: PorjectCardComponent
  let fixture: ComponentFixture<PorjectCardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, TranslocoDirective, PorjectCardComponent],
      providers: [...providers],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PorjectCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
