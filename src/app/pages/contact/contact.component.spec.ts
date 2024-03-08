/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContactComponent } from './contact.component';
import { CommonModule } from '@angular/common';
import { TranslocoDirective } from '@ngneat/transloco';
import { getTranslocoModule } from '../../utils/TestConfiguration';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PersonalInfoService } from '../../data/services/PersonalInfo.service';
import { mockedInfoService } from '../../data/mocks/objtSpys/mockedInfoService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[CommonModule, TranslocoDirective, getTranslocoModule(),FormsModule,MatFormField,MatInputModule, MatProgressSpinnerModule, BrowserAnimationsModule],
      providers: [{provide:PersonalInfoService, useValue: mockedInfoService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
