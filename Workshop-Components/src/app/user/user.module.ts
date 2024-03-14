import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './profile/user-profile.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    UserProfileComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
