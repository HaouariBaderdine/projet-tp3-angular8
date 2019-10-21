import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicepersonneComponent } from './exercicepersonne.component';

describe('ExercicepersonneComponent', () => {
  let component: ExercicepersonneComponent;
  let fixture: ComponentFixture<ExercicepersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicepersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicepersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
