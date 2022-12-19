import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Arraival2Component } from './arraival2.component';

describe('Arraival2Component', () => {
  let component: Arraival2Component;
  let fixture: ComponentFixture<Arraival2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Arraival2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Arraival2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
