import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-otp-password',
  templateUrl: './otp-password.component.html',
  styleUrls: ['./otp-password.component.css']
})
export class OtpPasswordComponent implements OnInit {
  otpPasswordForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  //only number will be added
  keyPress(event: any) {
		const pattern = /[0-9\+\-\ ]/;
		
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
	}

  ngOnInit() {
    this.otpPasswordForm = this.formBuilder.group({
      otpnumber: ['', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
				Validators.minLength(6), Validators.maxLength(6)]]
    });
  }
  
  // convenience getter for easy access to form fields
	get f() { return this.otpPasswordForm.controls; }
	onSubmit() {
		this.submitted = true;
		
    // stop here if form is invalid
    if (this.otpPasswordForm.invalid) {
        return;
    }
   
	}

}
