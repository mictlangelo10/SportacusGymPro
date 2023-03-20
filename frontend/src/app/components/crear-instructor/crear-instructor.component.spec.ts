import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInstructorComponent } from './crear-instructor.component';

describe('CrearInstructorComponent', () => {
  let component: CrearInstructorComponent;
  let fixture: ComponentFixture<CrearInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearInstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
