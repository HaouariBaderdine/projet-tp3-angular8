import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie4Component } from './partie4.component';

describe('Partie4Component', () => {
  let component: Partie4Component;
  let fixture: ComponentFixture<Partie4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partie4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partie4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
