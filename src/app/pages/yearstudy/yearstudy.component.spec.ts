import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearstudyComponent } from './yearstudy.component';

describe('YearstudyComponent', () => {
  let component: YearstudyComponent;
  let fixture: ComponentFixture<YearstudyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearstudyComponent]
    });
    fixture = TestBed.createComponent(YearstudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
