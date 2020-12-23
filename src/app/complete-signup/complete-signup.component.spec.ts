import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteSignupComponent } from './complete-signup.component';

describe('CompleteSignupComponent', () => {
  let component: CompleteSignupComponent;
  let fixture: ComponentFixture<CompleteSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
