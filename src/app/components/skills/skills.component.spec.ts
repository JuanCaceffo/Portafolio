/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SkillsComponent } from './skills.component';
import { CommonModule } from '@angular/common';
import { getTranslocoModule } from '../../utils/TestConfiguration';
import { TranslocoDirective } from '@ngneat/transloco';
import { PersonalInfoService } from '../../data/services/PersonalInfo.service';
import { mockedInfoService } from '../../data/mocks/objtSpys/mockedInfoService';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, TranslocoDirective, getTranslocoModule()],
      providers: [{provide: PersonalInfoService, useValue: mockedInfoService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
