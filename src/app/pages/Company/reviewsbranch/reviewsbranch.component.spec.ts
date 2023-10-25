import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsbranchComponent } from './reviewsbranch.component';

describe('ReviewsbranchComponent', () => {
  let component: ReviewsbranchComponent;
  let fixture: ComponentFixture<ReviewsbranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsbranchComponent]
    });
    fixture = TestBed.createComponent(ReviewsbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
