import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupsPage } from './soups.page';

describe('SoupsPage', () => {
  let component: SoupsPage;
  let fixture: ComponentFixture<SoupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SoupsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
