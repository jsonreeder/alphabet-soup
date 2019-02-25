import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupPage } from './soup.page';

describe('SoupPage', () => {
  let component: SoupPage;
  let fixture: ComponentFixture<SoupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
