import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Arraival1Component } from './arraival1.component';

describe('Arraival1Component', () => {
  let component: Arraival1Component;
  let fixture: ComponentFixture<Arraival1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Arraival1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Arraival1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
