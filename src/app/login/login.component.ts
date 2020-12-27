import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
	selector: 'login-form',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})


export class loginComponent {
	loginForm: FormGroup;
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
    this.loginForm = this.formBuilder.group({
       phonenumber: ['', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
				Validators.minLength(11), Validators.maxLength(11)]],
				password: ['', [Validators.required, Validators.minLength(6)]]
    });
	}

	// convenience getter for easy access to form fields
	get f() { return this.loginForm.controls; }
	onSubmit() {
		this.submitted = true;
		
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
   
	}

} 