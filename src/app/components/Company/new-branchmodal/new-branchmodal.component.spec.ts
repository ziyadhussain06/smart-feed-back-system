import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBranchmodalComponent } from './new-branchmodal.component';

describe('NewBranchmodalComponent', () => {
  let component: NewBranchmodalComponent;
  let fixture: ComponentFixture<NewBranchmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBranchmodalComponent]
    });
    fixture = TestBed.createComponent(NewBranchmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
