import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
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
    this.signUpForm = this.formBuilder.group({
       phonenumber: ['', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
				Validators.minLength(11), Validators.maxLength(11)]]
    });
  }
  
  // convenience getter for easy access to form fields
	get f() { return this.signUpForm.controls; }
	onSubmit() {
		this.submitted = true;
		
    // stop here if form is invalid
    if (this.signUpForm.invalid) {
        return;
    }
   
	}

}
