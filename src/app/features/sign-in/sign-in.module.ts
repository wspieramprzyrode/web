import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    AmplifyUIAngularModule
  ],
  exports: [
    SignInComponent
  ],
})
export class SignInModule { }
