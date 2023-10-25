import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchnavbarComponent } from './branchnavbar.component';

describe('BranchnavbarComponent', () => {
  let component: BranchnavbarComponent;
  let fixture: ComponentFixture<BranchnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchnavbarComponent]
    });
    fixture = TestBed.createComponent(BranchnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
