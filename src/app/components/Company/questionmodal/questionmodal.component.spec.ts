import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionmodalComponent } from './questionmodal.component';

describe('QuestionmodalComponent', () => {
  let component: QuestionmodalComponent;
  let fixture: ComponentFixture<QuestionmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionmodalComponent]
    });
    fixture = TestBed.createComponent(QuestionmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
