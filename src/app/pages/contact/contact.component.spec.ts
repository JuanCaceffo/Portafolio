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
import { TestingHelper } from '../../utils/TestingHelper';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let testingHelper: TestingHelper<ContactComponent>


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
    testingHelper = TestingHelper.createHelper(fixture) 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when one of the fileds are empty the send button is disabled', () => {
    component.data.email = 'dsadas'
    component.data.message = 'dsadas'
    fixture.detectChanges()
    expect(testingHelper.getByTestId('send-button').attributes.disabled.specified).toBeTrue()
  })
  it('when one of the fileds are empty the send button is disabled', () => {
    component.data.email = 'dsadas'
    component.data.message = 'dsadas'
    fixture.detectChanges()
    expect(testingHelper.getByTestId('send-button').attributes.disabled.specified).toBeTrue()
    expect(testingHelper.getByTestId('send-button').attributes['ng-reflect-ng-class'].value).toContain('contact__button--uncompleted')

  })

  it('when all the fileds are full the send button is not disabled', () => {
    component.data.email = 'dsadas'
    component.data.message = 'dsadas'
    component.data.name = 'dsadas'
    fixture.detectChanges()
    expect(testingHelper.getByTestId('send-button').attributes['ng-reflect-ng-class'].value).toBeFalsy()
  })

  it('when data is being sent, a spinner loading icon appears and the inputs are disabled', () => {
    component.data.email = 'dsadas'
    component.data.message = 'dsadas'
    component.data.name = 'dsadas'
    fixture.detectChanges()
    testingHelper.getByTestId('send-button').click()
    fixture.detectChanges()
    expect(testingHelper.getByTestId('loading-spinner')).toBeTruthy()
    testingHelper.getAllByTestId('contact-field').forEach((value) => {expect(value.attributes['ng-reflect-is-disabled'].value).toContain('true')})
  })
});
