import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './profile/user-profile.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent, UserProfileComponent, RegisterComponent],
  imports: [CommonModule, UserRoutingModule, RouterModule]
})
export class UserModule { }
