import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewopenmodalComponent } from './reviewopenmodal.component';

describe('ReviewopenmodalComponent', () => {
  let component: ReviewopenmodalComponent;
  let fixture: ComponentFixture<ReviewopenmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewopenmodalComponent]
    });
    fixture = TestBed.createComponent(ReviewopenmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
