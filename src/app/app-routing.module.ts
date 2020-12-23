import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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




const routes: Routes = [
	{ path: '', component: homeComponent },
	{ path: 'login', component: loginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'token-validation', component: TokenValidationComponent },
  { path: 'password-recovery', component: PasswordRecoveryComponent },
  { path: 'complete-signup', component: CompleteSignupComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  { path: 'edit-business', component: EditBusinessComponent },
  { path: 'edit-product', component: EditProductComponent },
  { path: 'otp-password', component: OtpPasswordComponent },
  { path: 'create-password', component: CreatePasswordComponent },
  { path: 'profile-page', component: ProfilePageComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: 'public-profile', component: PublicProfileComponent },
	{ path: 'search-result', component: SearchResultComponent },
  { path: 'add-business', component: AddBusinessComponent },


    // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
