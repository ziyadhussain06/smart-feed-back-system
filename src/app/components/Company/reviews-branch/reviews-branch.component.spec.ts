import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsBranchComponent } from './reviews-branch.component';

describe('ReviewsBranchComponent', () => {
  let component: ReviewsBranchComponent;
  let fixture: ComponentFixture<ReviewsBranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsBranchComponent]
    });
    fixture = TestBed.createComponent(ReviewsBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
