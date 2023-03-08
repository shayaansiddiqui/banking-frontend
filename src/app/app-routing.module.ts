import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {AppComponent} from './app.component';
import {LoginComponent} from "./pages/login/login.component";


const routes: Routes = [
  {path: '#', component: AppComponent},
  {path: 'Registration', component: RegistrationComponent, data: {animation: 'isDown'}},
  {path: 'Login', component: LoginComponent, data: {animation: 'isUp'}}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})


export class AppRoutingModule {

}



