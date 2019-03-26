import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTitlePage } from './business-title.page';

describe('BusinessTitlePage', () => {
  let component: BusinessTitlePage;
  let fixture: ComponentFixture<BusinessTitlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessTitlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessTitlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
