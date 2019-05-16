import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionalPage } from './instructional.page';

describe('InstructionalPage', () => {
  let component: InstructionalPage;
  let fixture: ComponentFixture<InstructionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
