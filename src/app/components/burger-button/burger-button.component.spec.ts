/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BurgerButtonComponent } from './burger-button.component';
import { providers } from '../../app.config';

describe('BurgerButtonComponent', () => {
  let component: BurgerButtonComponent;
  let fixture: ComponentFixture<BurgerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BurgerButtonComponent ],
      providers : providers
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
