import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchsidenavComponent } from './branchsidenav.component';

describe('BranchsidenavComponent', () => {
  let component: BranchsidenavComponent;
  let fixture: ComponentFixture<BranchsidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchsidenavComponent]
    });
    fixture = TestBed.createComponent(BranchsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
