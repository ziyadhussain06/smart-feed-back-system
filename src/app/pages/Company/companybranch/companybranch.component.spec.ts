import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanybranchComponent } from './companybranch.component';

describe('CompanybranchComponent', () => {
  let component: CompanybranchComponent;
  let fixture: ComponentFixture<CompanybranchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanybranchComponent]
    });
    fixture = TestBed.createComponent(CompanybranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
