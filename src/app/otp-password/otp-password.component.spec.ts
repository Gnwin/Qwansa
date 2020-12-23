import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpPasswordComponent } from './otp-password.component';

describe('OtpPasswordComponent', () => {
  let component: OtpPasswordComponent;
  let fixture: ComponentFixture<OtpPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
