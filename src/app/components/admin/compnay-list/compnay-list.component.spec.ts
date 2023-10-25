import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnayListComponent } from './compnay-list.component';

describe('CompnayListComponent', () => {
  let component: CompnayListComponent;
  let fixture: ComponentFixture<CompnayListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompnayListComponent]
    });
    fixture = TestBed.createComponent(CompnayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
