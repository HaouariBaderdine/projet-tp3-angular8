import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboudaaComponent } from './aboudaa.component';

describe('AboudaaComponent', () => {
  let component: AboudaaComponent;
  let fixture: ComponentFixture<AboudaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboudaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboudaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
