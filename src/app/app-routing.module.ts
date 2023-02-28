import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
import { RegistrationComponent } from "./registration/registration.component";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { animate, animation, style,state, transition, trigger, query, group } from '@angular/animations';
const routes: Routes = [
  {path : '', component : AppComponent},
  {path : 'Registration', component : RegistrationComponent},
  {path : 'Login', component : LoginComponent}
];
  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
  

  
})


export class AppRoutingModule {

  

 }



