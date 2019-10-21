import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Patie3Component } from './patie3.component';

describe('Patie3Component', () => {
  let component: Patie3Component;
  let fixture: ComponentFixture<Patie3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Patie3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Patie3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
