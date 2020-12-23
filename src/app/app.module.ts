import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homeComponent } from './home/home.component';
import { loginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TokenValidationComponent } from './token-validation/token-validation.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { CompleteSignupComponent } from './complete-signup/complete-signup.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { EditBusinessComponent } from './edit-business/edit-business.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OtpPasswordComponent } from './otp-password/otp-password.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AddBusinessComponent } from './add-business/add-business.component';


@NgModule({
  declarations: [
		AppComponent,
		homeComponent,
		loginComponent,
		SignUpComponent,
		TokenValidationComponent,
		PasswordRecoveryComponent,
		CompleteSignupComponent,
		UpdateProfileComponent,
		EditBusinessComponent,
		EditProductComponent,
		OtpPasswordComponent,
		CreatePasswordComponent,
		ProfilePageComponent,
		AddProductComponent,
		PublicProfileComponent,
		SearchResultComponent,
		AddBusinessComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
    RouterModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
