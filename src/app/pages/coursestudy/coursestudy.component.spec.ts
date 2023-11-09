import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursestudyComponent } from './coursestudy.component';

describe('CoursestudyComponent', () => {
  let component: CoursestudyComponent;
  let fixture: ComponentFixture<CoursestudyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursestudyComponent]
    });
    fixture = TestBed.createComponent(CoursestudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
