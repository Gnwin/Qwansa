import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// import custom validator to validate that password and confirm password fields match
// import { ConfirmedValidator } from './Validators/confirmedValidator';


@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.css']
})


export class CreatePasswordComponent implements OnInit {
  createNewForm: FormGroup;
  submitted = false;
	constructor(private formBuilder: FormBuilder) { }

  // ngOnInit() {
  //   this.createNewForm = this.formBuilder.group({
  //      createpassword: ['', [ Validators.required,
  //       Validators.pattern("^[0-9]*$"),
	// 			Validators.minLength(11), Validators.maxLength(11)]],
  //      confirmpassword: ['', [ Validators.required,
  //       Validators.pattern("^[0-9]*$"),
  //       Validators.minLength(11), Validators.maxLength(11)]]
  //   });
  // }
  
  ngOnInit() {
    // this.createNewForm = this.formBuilder.group({
    //     createpassword: ['', [Validators.required, Validators.minLength(6),
    //       Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
          
    //     confirmpassword: ['', [Validators.required,
    //       Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]]   
    //                         //^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{9,} 
    //                       }, { 
    //                         validator: ConfirmedValidator('password', 'confirm_password')
       
    // });
  }


	// convenience getter for easy access to form fields
	get f() { return this.createNewForm.controls; }
	onSubmit() {
		this.submitted = true;
		
    // stop here if form is invalid
    if (this.createNewForm.invalid) {
        return;
    }
   
	}

}
