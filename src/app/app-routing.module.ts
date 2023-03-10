import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {AppComponent} from './app.component';
import {LoginComponent} from "./pages/login/login.component";
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from './pages/header/header.component';


const routes: Routes = [
  {path: '#', component: AppComponent},
  {path: 'Registration', component: RegistrationComponent, data: {animation: 'isDown'}},
  {path: 'Login', component: LoginComponent, data: {animation: 'isUp'}},
  {path: 'Landing', component: LandingComponent},
  {path: 'Header', component: HeaderComponent}
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



