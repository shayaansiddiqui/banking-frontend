import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from "./pages/registration/registration.component";
import {AppComponent} from './app.component';
import {LoginComponent} from "./pages/login/login.component";
import {LandingComponent} from './pages/landing/landing.component';
import {HeaderComponent} from './common/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { TransactionComponent } from './pages/transaction/transaction.component';


//the path property should have names starting with a lowerCase (previously all names started with a upperCase character) (ex: Landing -> landing)
//to be able to pass the params to a route just add /:nameOfYourVariable and you will be able to retrieve it using the ActivatedRouter (Please see transaction.component.ts to check on how to retrieve data from routes)
const routes: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'registration',component: RegistrationComponent, data: {animation: 'isDown'}},
  {path: 'login', component: LoginComponent, data: {animation: 'isUp'}},
  {path: 'landing', component: LandingComponent},
  {path: 'header', component: HeaderComponent},
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent},
  { path: 'deposit', component: DepositComponent},
  { path: 'transaction/:id/:accountType', component: TransactionComponent}
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



