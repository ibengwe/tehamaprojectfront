import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlistComponent } from './studentlist.component';

describe('StudentlistComponent', () => {
  let component: StudentlistComponent;
  let fixture: ComponentFixture<StudentlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentlistComponent]
    });
    fixture = TestBed.createComponent(StudentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
