import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompanyModalComponent } from './new-company-modal.component';

describe('NewCompanyModalComponent', () => {
  let component: NewCompanyModalComponent;
  let fixture: ComponentFixture<NewCompanyModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCompanyModalComponent]
    });
    fixture = TestBed.createComponent(NewCompanyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
